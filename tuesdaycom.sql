drop schema if exists tuesdaycom cascade;
create schema tuesdaycom;
set schema 'tuesdaycom';

create table users (
	user_id serial primary key,
	firstname text,
	lastname text,
	username text, 
	"password" text, 
	email text
	);

create table project (
	project_id serial primary key,
	project_name text
);

create table group_data (
	group_id serial primary key,
	group_name text
);

create table task (
	task_id serial primary key,
	task_name text
);

create table board (
	board_id serial primary key
	user_id int4 references users (user_id),
    project_id int4 references project (project_id),--we reference a table name, then a column in that tablename
	group_id int4 references group_data (group_id),
	task_id int4 references task (task_id)
	--constraint board_pk primary key (user_id, project_id, group_id, task_id)
);

insert into users("firstname", "lastname", username, "password", email)
	values('matthew', 'beeman', 'msbeeman', 'password', 'msb@someEmail.com');
	
insert into project("project_name")
	values('tuesdaycom board');
	
insert into group_data("group_name")
	values('To do list');
	
insert into task("task_name")
	values('Project Planning');
	
insert into board
	values(1, 1, 1, 1);