CREATE DATABASE tsdb;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
);

INSERT INTO users (name, email)
    VALUES ('tony', 'paulurbina@gmail.com');

INSERT INTO users (name, email)
    VALUES ('kevin', 'kevin@gmail.com');