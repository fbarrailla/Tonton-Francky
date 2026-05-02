create table public.settings (
  key text primary key,
  value text not null,
  updated_at timestamptz default now()
);
