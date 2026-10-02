"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import {
  EMAIL_MAX,
  MARKETING_CONSENT_TEXT,
  NAME_MAX,
  validateEmail,
  validateFirstName,
  type FieldErrors,
} from "@/lib/waitlist-validation";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success"; duplicate: boolean; name?: string }
  | { kind: "error"; message: string };

export function WaitlistForm({ source }: { source: string }) {
  const id = useId();
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  // Move focus to the confirmation once it has rendered, so screen readers announce it.
  useEffect(() => {
    if (status.kind === "success") resultRef.current?.focus();
  }, [status.kind]);

  const ids = {
    email: `${id}-email`,
    emailErr: `${id}-email-error`,
    name: `${id}-name`,
    nameErr: `${id}-name-error`,
    consent: `${id}-consent`,
    note: `${id}-note`,
    privacy: `${id}-privacy`,
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status.kind === "submitting") return;

    const form = new FormData(e.currentTarget);
    const email = String(form.get("email") ?? "");
    const firstName = String(form.get("firstName") ?? "");
    const marketingConsent = form.get("marketingConsent") === "on";
    const company = String(form.get("company") ?? "");

    const next: FieldErrors = {};
    const emailError = validateEmail(email);
    const nameError = validateFirstName(firstName);
    if (emailError) next.email = emailError;
    if (nameError) next.firstName = nameError;
    setErrors(next);
    if (emailError) return emailRef.current?.focus();
    if (nameError) return nameRef.current?.focus();

    setStatus({ kind: "submitting" });
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName, marketingConsent, company, source }),
      });
      const data = (await res.json().catch(() => null)) as
        | { ok: boolean; code?: string; message?: string; fieldErrors?: FieldErrors }
        | null;

      if (res.ok && data?.ok) {
        setStatus({ kind: "success", duplicate: data.code === "duplicate", name: firstName.trim() || undefined });
        return;
      }
      if (data?.fieldErrors) {
        setErrors(data.fieldErrors);
        if (data.fieldErrors.email) emailRef.current?.focus();
        else if (data.fieldErrors.firstName) nameRef.current?.focus();
      }
      setStatus({
        kind: "error",
        message: data?.message ?? "We couldn't save your details. Please check your connection and try again.",
      });
    } catch {
      setStatus({
        kind: "error",
        message: "We couldn't reach our server. Please check your connection and try again.",
      });
    }
  }

  if (status.kind === "success") {
    return (
      <div ref={resultRef} tabIndex={-1} className="form-success" role="status">
        <p className="form-success-title">
          {status.duplicate
            ? "You're already on the list."
            : `Thank you${status.name ? `, ${status.name}` : ""}. You're on the waitlist.`}
        </p>
        <p>
          {status.duplicate
            ? "This email address was already saved, so there's nothing more to do. We'll email you when pre-orders open."
            : "Your details have been saved. We'll email you when pre-orders open. No payment has been taken."}
        </p>
        <button type="button" className="text-button" onClick={() => setStatus({ kind: "idle" })}>
          Add another email address
        </button>
      </div>
    );
  }

  const submitting = status.kind === "submitting";

  return (
    <form className="waitlist-form" noValidate onSubmit={onSubmit} aria-describedby={ids.note}>
      <div className="field">
        <label htmlFor={ids.email}>
          Email address <span className="field-req">(required)</span>
        </label>
        <input
          ref={emailRef}
          id={ids.email}
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          maxLength={EMAIL_MAX}
          required
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? ids.emailErr : undefined}
          onChange={() => errors.email && setErrors((p) => ({ ...p, email: undefined }))}
        />
        {errors.email ? (
          <p id={ids.emailErr} className="field-error">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div className="field">
        <label htmlFor={ids.name}>
          First name <span className="field-opt">(optional)</span>
        </label>
        <input
          ref={nameRef}
          id={ids.name}
          name="firstName"
          type="text"
          autoComplete="given-name"
          maxLength={NAME_MAX}
          aria-invalid={errors.firstName ? true : undefined}
          aria-describedby={errors.firstName ? ids.nameErr : undefined}
          onChange={() => errors.firstName && setErrors((p) => ({ ...p, firstName: undefined }))}
        />
        {errors.firstName ? (
          <p id={ids.nameErr} className="field-error">
            {errors.firstName}
          </p>
        ) : null}
      </div>

      {/* Honeypot for bots. Hidden from people and assistive tech. */}
      <div className="hp" aria-hidden="true">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="check">
        <input id={ids.consent} name="marketingConsent" type="checkbox" />
        <label htmlFor={ids.consent}>{MARKETING_CONSENT_TEXT} (optional)</label>
      </div>

      <button type="submit" className="btn btn-primary btn-block-sm" disabled={submitting} aria-disabled={submitting}>
        {submitting ? (
          <>
            <span className="spinner" aria-hidden="true" /> Saving your details…
          </>
        ) : (
          "Join the pre-order waitlist"
        )}
      </button>

      <p id={ids.note} className="form-note">
        No payment required. We&rsquo;ll email you when pre-orders open.
      </p>

      <div aria-live="polite" className="form-live">
        {submitting ? <span className="visually-hidden">Saving your details.</span> : null}
        {status.kind === "error" ? (
          <div className="form-error" role="alert">
            <p>{status.message}</p>
            <p className="form-error-hint">Your answers are still in the form, so you can try again.</p>
          </div>
        ) : null}
      </div>
    </form>
  );
}
