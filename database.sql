
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!


--For the user table
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

-- table to allow user to customize dashboard
CREATE TABLE "favorite" (
"id" SERIAL PRIMARY KEY,
"component_name" VARCHAR,
"user_id" int REFERENCES "user"
);