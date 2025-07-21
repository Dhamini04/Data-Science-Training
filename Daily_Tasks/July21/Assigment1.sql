/*Tables to be Created
1. employees*/

CREATE TABLE employees (
emp_id INT PRIMARY KEY,
emp_name VARCHAR(100),
department VARCHAR(50),
salary INT,
age INT
);

/*2. departments*/

CREATE TABLE departments (
dept_id INT PRIMARY KEY,
dept_name VARCHAR(50),
location VARCHAR(50)
);

/* Insert Sample Data*/

INSERT INTO employees VALUES 
(101, 'Amit Sharma', 'Engineering', 60000, 30),
(102, 'Neha Reddy', 'Marketing', 45000, 28),
(103, 'Faizan Ali', 'Engineering', 58000, 32),
(104, 'Divya Mehta', 'HR', 40000, 29),
(105, 'Ravi Verma', 'Sales', 35000,26);

/* departments*/

INSERT INTO departments VALUES
(1, 'Engineering', 'Bangalore'),
(2, 'Marketing', 'Mumbai'),
(3, 'HR', 'Delhi'),
(4, 'Sales', 'Chennai');

/* Section A: Basic SQL (Write Queries)*/

/*1. Display all employees.*/

SELECT * FROM employees;

SELECT emp_name, salary FROM employees;

SELECT * FROM  employees 
WHERE salary > 40000;

SELECT * FROM  employees
WHERE age BETWEEN 28 AND 32;

SELECT * FROM employees 
WHERE department != 'HR';

SELECT * FROM employees 
ORDER BY salary  DESC;

SELECT COUNT(*) FROM employees;

SELECT * FROM employees
ORDER BY salary DESC 
limit 1;

/*Section B: Joins & Aggregations*/

/*1. Display employee names along with their department locations (using JOIN).*/

SELECT emp_name, location 
FROM employees e
JOIN departments d
on e.department = d.dept_name;

/*2. List departments and count of employees in each department.*/

SELECT department, COUNT(*) AS emp_count
FROM employees e
GROUP BY department;

/*3. Show average salary per department.*/

SELECT department , AVG (salary) AS avg_salary 
FROM employees 
Group by  department;

/*4. Find departments that have no employees (use LEFT JOIN).*/

SELECT d.dept_name
FROM employees e 
LEFT JOIN departments d
ON e.department = d.dept_name
WHERE e. emp_id is NULL;

/*Find total salary paid by each department.*/

SELECT department, SUM(salary) AS total_salary
FROM employees e
GROUP BY department;

/*Display departments with average salary > 45,000.*/

SELECT department, AVG(salary) AS avg_salary
FROM employees 
GROUP BY department
Having avg_salary > 45000;

/*7. Show employee name and department for those earning more than 50,000.*/

SELECT emp_name, department 
FROM employees e
JOIN departments d
ON e.department  = d.dept_name
WHERE salary >50000;
 




