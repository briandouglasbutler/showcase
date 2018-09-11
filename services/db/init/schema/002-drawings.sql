create table if not exists drawings
(
    id uuid primary key default gen_random_uuid(),
    user_handle uuid references users(user_handle) not null,
    upload_date timestamp not null
);

grant select, insert, update, delete on table drawings to project_app;
grant select on table drawings to project_read;
