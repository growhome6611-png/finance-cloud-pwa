-- Chạy toàn bộ đoạn SQL này trong Supabase > SQL Editor > New query > Run.

create table if not exists public.user_finance_data (
  user_id uuid primary key references auth.users(id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.user_finance_data enable row level security;

revoke all on table public.user_finance_data from anon;
grant select, insert, update, delete on table public.user_finance_data to authenticated;

create policy "Users can read own finance data"
on public.user_finance_data for select
to authenticated
using ((select auth.uid()) = user_id);

create policy "Users can insert own finance data"
on public.user_finance_data for insert
to authenticated
with check ((select auth.uid()) = user_id);

create policy "Users can update own finance data"
on public.user_finance_data for update
to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);

create policy "Users can delete own finance data"
on public.user_finance_data for delete
to authenticated
using ((select auth.uid()) = user_id);
