CREATE DATABASE simple_sql;

USE simple_sql;
 
CREATE TABLE employees (

    emp_id INT PRIMARY KEY,

    emp_name VARCHAR(100),

    department VARCHAR(50),

    salary INT,

    age INT

);
 
INSERT INTO employees VALUES

(1, 'Amit', 'HR', 30000, 25),

(2, 'Neha', 'IT', 45000, 28),

(3, 'Rahul', 'IT', 50000, 30),

(4, 'Divya', 'Sales', 40000, 26),

(5, 'Kiran', 'Sales', 35000, 24),

(6, 'Meena', 'HR', 32000, 29);

 select * from employees
where salary > (
select avg(salary) from employees
);

SELECT dept_avg.department, dept_avg.avg_salary
FROM (
    SELECT department, AVG(salary) AS avg_salary
    FROM employees
    GROUP BY department
) AS dept_avg;

select emp_name, department, salary,
rank() over (order by salary desc) as salary_rank
from employees;

drop table department;
CREATE TABLE department (
dep_id INT PRIMARY KEY,
dep_name VARCHAR(100)
);

INSERT INTO  department VALUES
(1, 'human resources'),
(2, 'Engineering'),
(3, 'marketing');

drop table employees;
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

select e.emp_name, d.dep_name
from employees e
join department d on e.dep_id = d.dep_id;

select e.emp_name, d.dep_name
from employees e
join department d on e.dep_id = d.dep_id
where d.dep_id is null;

select d.dep_name , count(e.emp_id) as total_employees
from department d
left join  employees  e on d.dep_id = e.dep_id
group by d.dep_name;

select d.dep_name
from department d
left join employees e on d.dep_id = e.dep_id
where e.emp_id is null; 

select e.emp_name , d.dep_name
from employees e 
join department d on d.dep_id = e.dep_id
where e.salary >40000;


 