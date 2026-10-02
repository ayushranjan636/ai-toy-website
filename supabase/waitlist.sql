-- Zivoo pre-order interest waitlist
-- Run once in the Supabase SQL editor.

create table if not exists public.waitlist_signups (
  id                 uuid primary key default gen_random_uuid(),
  email              text not null,
  first_name         text,
  marketing_consent  boolean not null default false,
  consent_text       text,
  source             text,
  created_at         timestamptz not null default now(),
  constraint waitlist_signups_email_unique unique (email),
  constraint waitlist_signups_email_length check (char_length(email) <= 254),
  constraint waitlist_signups_name_length check (first_name is null or char_length(first_name) <= 60)
);

-- Lock the table down: only the server (service role) may read or write.
alter table public.waitlist_signups enable row level security;
-- No policies are created, so the public "anon" key has no access.
