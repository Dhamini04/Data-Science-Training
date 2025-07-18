CREATE DATABASE analytics_practice;
USE analytics_practice;
 
CREATE TABLE sales_data (
    sale_id INT PRIMARY KEY,
    employee_name VARCHAR(100),
    region VARCHAR(50),
    sale_amount DECIMAL(10,2),
    sale_date DATE
);

INSERT INTO sales_data VALUES
(1, 'Amit Sharma', 'North', 12000.50, '2024-01-15'),
(2, 'Neha Reddy', 'East', 8500.00, '2024-01-16'),
(3, 'Faizan Ali', 'North', 10000.00, '2024-01-20'),
(4, 'Divya Iyer', 'South', 13000.00, '2024-01-21'),
(5, 'Kiran Mehta', 'East', 9000.00, '2024-01-22'),
(6, 'Amit Sharma', 'North', 15000.00, '2024-02-05'),
(7, 'Neha Reddy', 'East', 8000.00, '2024-02-10'),
(8, 'Faizan Ali', 'North', 7000.00, '2024-02-15'),
(9, 'Divya Iyer', 'South', 14000.00, '2024-02-18'),
(10, 'Kiran Mehta', 'East', 6500.00, '2024-02-20');

select employee_name
from sales_data
group by employee_name
having sum(sale_amount) > (select avg(sale_amount) from sales_data);

CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(100),
    department VARCHAR(50),
    salary DECIMAL(10,2)
);

INSERT INTO employees VALUES
(1, 'Amit Sharma', 'HR', 50000),
(2, 'Neha Reddy', 'Finance', 60000),
(3, 'Faizan Ali', 'IT', 75000),
(4, 'Divya Iyer', 'Marketing', 45000),
(5, 'Kiran Mehta', 'IT', 80000);

select * from employees
where salary > (
select avg(salary) from employees
);

use analytics_practice;
 
CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    customer_name VARCHAR(100),
    city VARCHAR(50)
);
 
 
INSERT INTO customers VALUES
(1, 'Amit Sharma', 'Delhi'),
(2, 'Neha Reddy', 'Hyderabad'),
(3, 'Rahul Iyer', 'Mumbai'),
(4, 'Divya Mehta', 'Chennai');
 
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    product_name VARCHAR(100),
    order_amount INT,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);
 
INSERT INTO orders VALUES
(101, 1, 'Laptop', 55000),
(102, 2, 'Mouse', 500),
(103, 1, 'Keyboard', 1500),
(104, 3, 'Monitor', 7000),
(105, 2, 'Printer', 8500);

select customers.customer_name, orders.product_name, orders.order_amount
from customers
inner join orders
on customers.customer_id = orders.customer_id;

select customers.customer_name, orders.product_name
from customers
left join orders
on customers.customer_id = orders.customer_id;

select customers.customer_name, orders.product_name
from customers
right join orders
on customers.customer_id = orders.customer_id;

select customers.customer_name, orders.product_name
from customers
 join orders
on customers.customer_id = orders.customer_id
where orders.order_amount >5000;

select o.order_id , c.customer_id, c.city, o.product_name, o.order_amount
from orders o
join customers c
on o.customer_id = c.customer_id;

select c.customer_name, count(o.order_id) as total_orders
from customers c
join orders o on c.customer_id = o.customer_id
group by c.customer_name
having total_orders >1;

select c.customer_name, count(o.order_id) as total_orders
from customers c
join orders o on c.customer_id = o.customer_id
group by c.customer_name
having total_orders is null;

select c.city , count(o.order_id) as order_count
from customers c
join orders o on c.customer_id = o.customer_id
group by c.city;



