"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { primaryNav, waitlistHref } from "@/lib/site";
import { LeafMark } from "./LeafMark";
import { Logo } from "./Logo";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close the menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const firstLink = panelRef.current?.querySelector<HTMLElement>("a");
    firstLink?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onResize = () => {
      if (window.matchMedia("(min-width: 900px)").matches) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo width={118} priority />

        <nav className="primary-nav" aria-label="Primary">
          <ul>
            {primaryNav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link href={item.href} aria-current={active ? "page" : undefined} className="nav-link">
                    <span>{item.label}</span>
                    <LeafMark className="nav-leaf" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="header-actions">
          <a href={waitlistHref} className="btn btn-primary btn-small header-cta">
            Join the waitlist
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="menu-toggle-bars" aria-hidden="true">
              <span />
              <span />
            </span>
            <span>{open ? "Close" : "Menu"}</span>
          </button>
        </div>
      </div>

      <div id="mobile-menu" ref={panelRef} className="mobile-menu" hidden={!open}>
        <nav aria-label="Mobile">
          <ul>
            {primaryNav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link href={item.href} aria-current={active ? "page" : undefined} className="mobile-link">
                    {item.label}
                    {active ? <LeafMark className="mobile-leaf" /> : null}
                  </Link>
                </li>
              );
            })}
          </ul>
          <a href={waitlistHref} className="btn btn-primary btn-block" onClick={() => setOpen(false)}>
            Join the waitlist
          </a>
        </nav>
      </div>
    </header>
  );
}
