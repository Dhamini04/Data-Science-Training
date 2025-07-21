----SQL Assessment: Design, Populate & Query-------

/*
PART 1: Design the Database
Create the following three tables with appropriate datatypes and constraints:
1. books
book_id (INT, Primary Key)
title (VARCHAR)
author (VARCHAR)
genre (VARCHAR)
price (DECIMAL)

2. customers
customer_id (INT, Primary Key)
name (VARCHAR)
email (VARCHAR)
city (VARCHAR)

3. orders
order_id (INT, Primary Key)
customer_id (INT, Foreign Key → customers)
book_id (INT, Foreign Key → books)
order_date (DATE)
quantity (INT)
*/


-- Table: books
CREATE TABLE books (
  book_id INT PRIMARY KEY,
  title VARCHAR(100),
  author VARCHAR(100),
  genre VARCHAR(50),
  price DECIMAL(8,2)
);

-- Table: customers
CREATE TABLE customers (
  customer_id INT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  city VARCHAR(50)
);

-- Table: orders
CREATE TABLE orders (
  order_id INT PRIMARY KEY,
  customer_id INT,
  book_id INT,
  order_date DATE,
  quantity INT,
  FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
  FOREIGN KEY (book_id) REFERENCES books(book_id)
);

/*
PART 2: Insert Sample Data
Insert at least:
5 books (with varied genres and prices)
5 customers (from different cities)
7 orders (mix of books, customers, and dates)
*/

INSERT INTO books VALUES
(1, 'The Alchemist', 'Paulo Coelho', 'Fiction', 550.00),
(2, 'Deep Work', 'Cal Newport', 'Self-help', 620.00),
(3, 'Clean Code', 'Robert C. Martin', 'Programming', 800.00),
(4, 'Atomic Habits', 'James Clear', 'Self-help', 499.00),
(5, 'Invisible Man', 'Ralph Ellison', 'Classic', 450.00);

INSERT INTO customers VALUES
(101, 'Amit Sharma', 'amit@gmail.com', 'Hyderabad'),
(102, 'Neha Reddy', 'neha@yahoo.com', 'Mumbai'),
(103, 'Ravi Verma', 'ravi@hotmail.com', 'Delhi'),
(104, 'Divya Mehta', 'divya@gmail.com', 'Hyderabad'),
(105, 'Faizan Ali', 'faizan@gmail.com', 'Chennai');


INSERT INTO orders VALUES 
(1001, 101, 1, '2023-01-01', 2),
(1002, 102, 3, '2023-02-15', 1),
(1003, 104, 2, '2023-03-10', 3),
(1004, 105, 4, '2022-12-20', 1),
(1005, 103, 2, '2023-05-01', 1);

---------------------------PART 3: Write and Execute Queries------------------------
--- Basic Queries
--1. List all books with price above 500.

SELECT * FROM books
WHERE price > 500;

--2. Show all customers from the city of ‘Hyderabad’.

SELECT * FROM customers
WHERE  city = 'Hyderabad';

--3. Find all orders placed after ‘2023-01-01’.

SELECT * FROM orders
WHERE order_date ='2023-01-01';

---------------------------Joins & Aggregations---------------------------------------

--4. Show customer names along with book titles they purchased.

SELECT c.name , b.title
FROM orders o
JOIN customers c
ON c.customer_id = o.customer_id
JOIN books b
ON o.book_id = b.book_id;

--5. List each genre and total number of books sold in that genre.

SELECT b.genre, SUM(o.quantity) AS total_sold
FROM books b
JOIN orders o 
ON b.book_id = o.book_id
GROUP BY b.genre;

--6. Find the total sales amount (price × quantity) for each book.

SELECT b.title, SUM(b.price * o.quantity) AS total_sales_amount
FROM books b
JOIN orders o ON b.book_id = o.book_id
GROUP BY b.title;

--7. Show the customer who placed the highest number of orders.

SELECT c.name , count(*) AS order_count
FROM customers c
JOIN orders o
ON c.customer_id = o.customer_id
GROUP BY c.name
ORDER BY order_count DESC
LIMIT 1;

--8. Display average price of books by genre.

SELECT genre , AVG(price) AS avg_price
FROM books
GROUP BY genre;

--9. List all books that have not been ordered.

SELECT * 
FROM books
WHERE book_id NOT IN (
    SELECT DISTINCT book_id 
    FROM orders
);

--10. Show the name of the customer who has spent the most in total.

SELECT c.name , SUM( b.price * o.quantity ) AS total_spent
FROM customers c
JOIN orders o
ON c.customer_id = o.customer_id
JOIN books b
ON o.book_id = b.book_id
GROUP BY c.name
ORDER BY total_spent DESC
LIMIT 1;


