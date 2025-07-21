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

CREATE TABLE orders (
  order_id INT PRIMARY KEY,
  customer_id INT,
  book_id INT,
  order_date DATE,
  quantity INT,
  FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
  FOREIGN KEY (book_id) REFERENCES books(book_id)
);

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
(1001, 101, 1, '2023-01-05', 2),
(1002, 102, 3, '2023-02-15', 1),
(1003, 104, 2, '2023-03-10', 3),
(1004, 105, 4, '2022-12-20', 1),
(1005, 103, 2, '2023-05-01', 1);

SELECT * FROM books
WHERE price > 500;

SELECT * FROM customers
WHERE  city = 'Hyderabad';

SELECT * FROM orders
WHERE order_date ='2023-01-01';
INSERT INTO orders (order_id, customer_id, book_id, order_date, quantity)
VALUES (1008, 102, 5, '2023-01-01', 1);


SELECT c.name , b.title
FROM orders o
JOIN customers c
ON c.customer_id = o.customer_id
JOIN books b
ON o.book_id = b.book_id;
 
SELECT b.genre, SUM(o.quantity) AS total_sold
FROM books b
JOIN orders o 
ON b.book_id = o.book_id
GROUP BY b.genre;

SELECT b.title, SUM(b.price * o.quantity) AS total_sales_amount
FROM books b
JOIN orders o ON b.book_id = o.book_id
GROUP BY b.title;

SELECT c.name , count(*) AS order_count
FROM customers c
JOIN orders o
ON c.customer_id = o.customer_id
GROUP BY c.name
ORDER BY order_count DESC
LIMIT 1;

SELECT genre , AVG(price) AS avg_price
FROM books
GROUP BY genre;

SELECT * 
FROM books
WHERE book_id NOT IN (
    SELECT DISTINCT book_id 
    FROM orders
);


SELECT c.name , SUM( b.price * o.quantity ) AS total_spent
FROM customers c
JOIN orders o
ON c.customer_id = o.customer_id
JOIN books b
ON o.book_id = b.book_id
GROUP BY c.name
ORDER BY total_spent DESC
LIMIT 1;


