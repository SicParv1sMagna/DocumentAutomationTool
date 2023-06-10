CREATE TABLE users
(
    id serial not null unique,
    first_name varchar(255) not null,
    email varchar(255) not null unique,
    password_hash varchar(255) not null
)