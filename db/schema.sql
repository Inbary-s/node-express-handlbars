DROP DATABASE IF EXISTS burgers_DB;

CREATE DATABASE burgers_DB;

USE burgers_DB;


CREATE TABLE burgers (
id INT auto_increment,
name VARCHAR(30),
devoured BOOLEAN DEFAULT FALSE,
primary key (id)
);


     
-- drop table burgers ;