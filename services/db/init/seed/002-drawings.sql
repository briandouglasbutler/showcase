insert into drawings (id, user_handle, upload_date) values
    ('06fad102-1a73-41ad-ba62-7bbd4be3278f', '037b4897-8a2a-46b6-8ed7-47a555bb40f2', now())
on conflict do nothing;
