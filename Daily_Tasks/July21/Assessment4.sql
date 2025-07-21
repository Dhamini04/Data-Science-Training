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

CREATE TABLE rentals (
  rental_id INT PRIMARY KEY,
  customer_id INT,
  movie_id INT,
  rental_date DATE,
  return_date DATE,
  FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
  FOREIGN KEY (movie_id) REFERENCES movies(movie_id)
);

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

SELECT m.title, c.name
FROM rentals r
JOIN customers c
ON r.customer_id = c.customer_id
JOIN movies m
ON r.movie_id = m.movie_id
WHERE c.name = 'Amit Singh';

SELECT * FROM  customers
WHERE city ='BANGALORE';
 
SELECT * FROM movies
WHERE release_year > 2020;

SELECT c.name, COUNT(r.rental_id) AS total_rented 
FROM customers c
JOIN rentals r
ON c.customer_id = r.customer_id
GROUP BY c.name;

SELECT m.title , COUNT(rental_id) AS rental_count
FROM movies m
JOIN rentals r
ON m.movie_id = r.movie_id
GROUP BY m.title
ORDER BY rental_count DESC
limit 1;

SELECT SUM(m.rental_rate) as total_revenue
FROM rentals r
JOIN movies m
ON r.movie_id = m.movie_id;

SELECT name
FROM customers 
WHERE customer_id NOT IN (SELECT DISTINCT  customer_id FROM rentals);


SELECT m.genre, SUM(m.rental_rate) as genre_revenue
FROM rentals r
JOIN movies m
ON m.movie_id = r.movie_id
GROUP BY m.genre;


SELECT c.name, SUM(m.rental_rate) AS total_spent
FROM customers c
JOIN rentals r 
ON c.customer_id = r.customer_id
JOIN movies m 
ON r.movie_id = m.movie_id
GROUP BY c.name
ORDER BY total_spent DESC
LIMIT 1;

SELECT m.title, r.rental_date
FROM rentals r
JOIN movies m ON r.movie_id = m.movie_id
WHERE r.return_date IS NULL;