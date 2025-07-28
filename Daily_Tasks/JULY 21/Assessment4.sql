--------------------SQL Case Study Assessment: Movie Rentals System---------------------------------------
/*SECTION 1: Database Design
(Create tables with proper datatypes & keys) Design the schema with these 3 tables:
1. movies
movie_id (Primary Key)
title
genre
release_year
rental_rate
2. customers
customer_id (Primary Key)
name
email
city
3. rentals
rental_id (Primary Key)
customer_id (Foreign Key)
movie_id (Foreign Key)
rental_date
return_date
Task: Write SQL commands to create these tables using appropriate data types and
constraints.*/

-- Movies table
CREATE TABLE movies (
  movie_id INT PRIMARY KEY,
  title VARCHAR(100),
  genre VARCHAR(50),
  release_year YEAR,
  rental_rate INT
);

-- Customers table
CREATE TABLE customers (
  customer_id INT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  city VARCHAR(50)
);

--rentals table

CREATE TABLE rentals (
  rental_id INT PRIMARY KEY,
  customer_id INT,
  movie_id INT,
  rental_date DATE,
  return_date DATE,
  FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
  FOREIGN KEY (movie_id) REFERENCES movies(movie_id)
);


/*SECTION 2: Data Insertion
Insert sample records into each table:
At least 5 movies from different genres and years
At least 5 customers from different cities
At least 8 rental records — make sure at least one movie is rented more than
once
 Task: Write SQL INSERT statements for all the data.*/

INSERT INTO movies VALUES
(1, 'Inception', 'Sci-Fi', 2010, 150),
(2, 'The Godfather', 'Crime', 1972, 120),
(3, 'Soul', 'Animation', 2020, 100),
(4, 'Parasite', 'Thriller', 2019, 130),
(5, 'Dune', 'Sci-Fi', 2021, 160);

INSERT INTO customers VALUES
(101, 'Amit Sharma', 'amit@gmail.com', 'Delhi'),
(102, 'Neha Reddy', 'neha@yahoo.com', 'Bangalore'),
(103, 'Ravi Verma', 'ravi@gmail.com', 'Mumbai'),
(104, 'Divya Mehta', 'divya@hotmail.com', 'Bangalore'),
(105, 'Faizan Ali', 'faizan@gmail.com', 'Hyderabad');

INSERT INTO rentals VALUES
(1001, 101, 1, '2023-01-05', '2023-01-08'),
(1002, 102, 3, '2023-02-10', '2023-02-12'),
(1003, 103, 2, '2023-02-15', '2023-02-18'),
(1004, 104, 4, '2023-03-01', '2023-03-05'),
(1005, 101, 5, '2023-04-01', NULL), -- Inception rented again
(1006, 105, 2, '2023-05-01', '2023-05-03'),
(1007, 102, 5, '2023-06-10', '2023-06-13'),
(1008, 103, 1, '2023-07-01', '2023-07-04');

----SECTION 3: Query Execution---------------------
-- Basic Queries

--1. Retrieve all movies rented by a customer named 'Amit Sharma'.

SELECT m.title, c.name
FROM rentals r
JOIN customers c
ON r.customer_id = c.customer_id
JOIN movies m
ON r.movie_id = m.movie_id
WHERE c.name = 'Amit Singh';

--2. Show the details of customers from 'Bangalore'.

SELECT * FROM  customers
WHERE city ='BANGALORE';

 --3. List all movies released after the year 2020.

SELECT * FROM movies
WHERE release_year > 2020;

---------------Aggregate Queries----------------------

--4. Count how many movies each customer has rented.

SELECT c.name, COUNT(r.rental_id) AS total_rented 
FROM customers c
JOIN rentals r
ON c.customer_id = r.customer_id
GROUP BY c.name;

--5. Find the most rented movie title.

SELECT m.title , COUNT(rental_id) AS rental_count
FROM movies m
JOIN rentals r
ON m.movie_id = r.movie_id
GROUP BY m.title
ORDER BY rental_count DESC
limit 1;

--6. Calculate total revenue earned from all rentals.

SELECT SUM(m.rental_rate) as total_revenue
FROM rentals r
JOIN movies m
ON r.movie_id = m.movie_id;

--7. List all customers who have never rented a movie.

SELECT name
FROM customers 
WHERE customer_id NOT IN (SELECT DISTINCT  customer_id FROM rentals);

--8. Show each genre and the total revenue from that genre.

SELECT m.genre, SUM(m.rental_rate) as genre_revenue
FROM rentals r
JOIN movies m
ON m.movie_id = r.movie_id
GROUP BY m.genre;

--9. Find the customer who spent the most money on rentals.

SELECT c.name, SUM(m.rental_rate) AS total_spent
FROM customers c
JOIN rentals r 
ON c.customer_id = r.customer_id
JOIN movies m 
ON r.movie_id = m.movie_id
GROUP BY c.name
ORDER BY total_spent DESC
LIMIT 1;

--10. Display movie titles that were rented and not yet returned ( return_date IS NULL ).

SELECT m.title, r.rental_date
FROM rentals r
JOIN movies m ON r.movie_id = m.movie_id
WHERE r.return_date IS NULL;
