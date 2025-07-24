-- Create Tables

CREATE TABLE Destinations (
    destination_id INT PRIMARY KEY,
    city VARCHAR(50),
    country VARCHAR(50),
    category VARCHAR(30),
    avg_cost_per_day INT
);


CREATE TABLE Trips (
    trip_id INT PRIMARY KEY,
    destination_id INT,
    traveler_name VARCHAR(50),
    start_date DATE,
    end_date DATE,
    budget INT,
    FOREIGN KEY (destination_id) REFERENCES Destinations(destination_id)
);


-- Insert Sample Data into Destinations

INSERT INTO Destinations VALUES
(1, 'Goa', 'India', 'Beach', 2500),
(2, 'Paris', 'France', 'Historical', 6000),
(3, 'Manali', 'India', 'Adventure', 2000),
(4, 'Cape Town', 'South Africa', 'Nature', 4000),
(5, 'Kyoto', 'Japan', 'Historical', 4500),
(6, 'Bali', 'Indonesia', 'Beach', 3000);


-- Insert Sample Data into Trips

INSERT INTO Trips VALUES
(101, 1, 'Aarav', '2024-12-20', '2024-12-25', 15000),
(102, 3, 'Meera', '2025-01-10', '2025-01-18', 18000),
(103, 2, 'John', '2025-03-01', '2025-03-10', 54000),
(104, 4, 'Sara', '2025-02-15', '2025-02-20', 20000),
(105, 5, 'Kento', '2023-07-01', '2023-07-07', 32000),
(106, 6, 'Aisha', '2025-06-10', '2025-06-15', 18000),
(107, 1, 'Raj', '2024-08-01', '2024-08-06', 13000),
(108, 2, 'Emily', '2024-09-15', '2024-09-25', 60000),
(109, 4, 'David', '2022-12-01', '2022-12-10', 35000),
(110, 3, 'Aarav', '2023-04-20', '2023-04-28', 16000);

-- 1. Show all trips to destinations in “India”.

SELECT T.*
FROM Trips T
JOIN Destinations D 
ON T.destination_id = D.destination_id
WHERE D.country = 'India';  


-- 2. List all destinations with an average cost below ₹3000.

SELECT * FROM Destinations
WHERE avg_cost_per_day < 3000;

-- 3. Calculate the number of days for each trip.

SELECT trip_id, DATEDIFF(end_date, start_date) + 1 AS duration_days
FROM Trips;

-- 4. List all trips that last more than 7 days

SELECT * 
FROM Trips
WHERE DATEDIFF(end_date, start_date) + 1 > 7;

-- 5. List traveler name, destination city, and total trip cost.

SELECT T.traveler_name, D.city,
       (DATEDIFF(T.end_date, T.start_date) + 1) * D.avg_cost_per_day AS total_trip_cost
FROM Trips T
JOIN Destinations D ON T.destination_id = D.destination_id;

-- 6. Find the total number of trips per country.

SELECT D.country, COUNT(*) AS total_trips
FROM Trips T
JOIN Destinations D ON T.destination_id = D.destination_id
GROUP BY D.country;

-- 7. Show average budget per country.

SELECT D.country, AVG(T.budget) AS avg_budget
FROM Trips T
JOIN Destinations D ON T.destination_id = D.destination_id
GROUP BY D.country;

-- 8. Find which traveler has taken the most trips.

SELECT traveler_name, COUNT(*) AS trips_count
FROM Trips
GROUP BY traveler_name
ORDER BY trips_count DESC
LIMIT 1;

-- 9. Show destinations that haven’t been visited yet.

SELECT * FROM Destinations
WHERE destination_id NOT IN (
    SELECT DISTINCT destination_id FROM Trips
);


-- 10. Find the trip with the highest cost per day.

SELECT trip_id, traveler_name,
       budget / (DATEDIFF(end_date, start_date) + 1) AS cost_per_day
FROM Trips
ORDER BY cost_per_day DESC
LIMIT 1;

-- 11. Update the budget for a trip that was extended by 3 days.
-- (Assume trip_id = 102 was extended, and daily cost from destination = 2000)

UPDATE Trips
SET budget = budget + (3 * 2000)
WHERE trip_id = 102;

-- 12. Delete all trips that were completed before Jan 1, 2023.
 
SET SQL_SAFE_UPDATES = 0;
DELETE FROM Trips
WHERE end_date < '2023-01-01';
SET SQL_SAFE_UPDATES = 1;