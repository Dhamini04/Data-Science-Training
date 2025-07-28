--Tables & Insert Statements

CREATE DATABASE simple_sql;
USE simple_sql;

/*
1. departments Table

CREATE TABLE departments ( ); dept id INT PRIMARY KEY, dept name VARCHAR(100)

INSERT INTO departments VALUES

(1, 'Human Resources'), (2, 'Engineering'), (3, 'Marketing');

*/

CREATE TABLE department (
dep_id INT PRIMARY KEY,
dep_name VARCHAR(100)
);

INSERT INTO  department VALUES
(1, 'human resources'),
(2, 'Engineering'),
(3, 'marketing');


/* 
2. employees Table

CREATE TABLE employees (

); emp id INT PRIMARY KEY, emp name VARCHAR(180), dept id INT, salary INT

INSERT INTO employees VALUES

(101, 'Amit Sharma', 1, 30000),

(102, 'Neha Reddy, 2, 45000),

(103, 'Faizan Ali', 2, 48000),

(104, 'Divya Mehta', 3, 35000),

(105, 'Ravi Verma', NULL, 28000);
*/

create table employees(
emp_id int primary key,
emp_name varchar(100),
dep_id int,
salary int
);

insert into employees values
(101, 'Amit Sharma', 1, 30000),
(102,'neha Reddy', 2, 45000),
(103, 'Faizan Ali', 3, 40000),
(104, 'Divya Mehta', 4, 35000),
(105, 'Ravi varma' , 5, 20000);

--JOIN-Based Questions
--1. Show all employees with their department names.

select e.emp_name, d.dep_name
from employees e
join department d on e.dep_id = d.dep_id;

--2. List employees who do not belong to any department.

select e.emp_name, d.dep_name
from employees e
join department d on e.dep_id = d.dep_id
where d.dep_id is null;

--3. Display the total number of employees in each department.

select d.dep_name , count(e.emp_id) as total_employees
from department d
left join  employees  e on d.dep_id = e.dep_id
group by d.dep_name;

--4. Show departments with no employees.

select d.dep_name
from department d
left join employees e on d.dep_id = e.dep_id
where e.emp_id is null; 

--5. List employee names and department names for those who earn more than 40,000.

select e.emp_name , d.dep_name
from employees e 
join department d on d.dep_id = e.dep_id
where e.salary >40000;


 
