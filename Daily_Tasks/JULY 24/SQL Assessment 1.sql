/* 
                                   SQL Assignment – Personal Fitness Tracker 
Table 1: Exercises
exercise_id (Primary Key)
exercise_name
category (e.g., Cardio, Strength, Flexibility)
calories_burn_per_min

 Table 2: WorkoutLog
log_id (Primary Key)
exercise_id (Foreign Key)
date
duration_min (minutes)
mood (e.g., Energized, Tired, Normal)

 Insert Sample Data
Insert at least 5 different exercises.
Log at least 2 workouts per exercise across different days.
*/


CREATE TABLE Exercises (
    exercise_id INT PRIMARY KEY,
    exercise_name VARCHAR(50),
    category VARCHAR(30),
    calories_burn_per_min INT
);

CREATE TABLE WorkoutLog (
    log_id INT PRIMARY KEY,
    exercise_id INT,
    date DATE,
    duration_min INT,
    mood VARCHAR(20),
    FOREIGN KEY (exercise_id) REFERENCES Exercises(exercise_id)
);

-- Insert Sample Data into Exercises

INSERT INTO Exercises VALUES
(1, 'Running', 'Cardio', 10),
(2, 'Cycling', 'Cardio', 8),
(3, 'Weight Lifting', 'Strength', 6),
(4, 'Yoga', 'Flexibility', 4),
(5, 'Push Ups', 'Strength', 7);

-- Insert Sample Data into WorkoutLog

INSERT INTO WorkoutLog VALUES
(101, 1, '2025-03-05', 30, 'Energized'),
(102, 1, '2025-03-10', 45, 'Tired'),
(103, 2, '2025-03-12', 20, 'Normal'),
(104, 2, '2025-04-01', 25, 'Energized'),
(105, 3, '2025-03-07', 40, 'Normal'),
(106, 3, '2025-03-14', 50, 'Tired'),
(107, 4, '2025-03-08', 60, 'Energized'),
(108, 4, '2025-04-02', 30, 'Normal'),
(109, 5, '2025-03-15', 20, 'Tired'),
(110, 5, '2025-03-20', 25, 'Normal');

-- 1. Show all exercises under the “Cardio” category.
 SELECT * FROM Exercises
 WHERE category ="Cardio";
 
 -- 2. Show workouts done in the month of March 2025.
 
 SELECT * FROM WorkoutLog
 WHERE MONTH(date)= 3 AND YEAR(date) = 2025; 
 
 -- 3. Calculate total calories burned per workout.
 
SELECT log_id, duration_min * E.calories_burn_per_min AS total_calories
FROM WorkoutLog W
JOIN Exercises E 
ON W.exercise_id = E.exercise_id;

-- 4. Calculate average workout duration per category.

SELECT E.category, AVG(W.duration_min) AS avg_duration
FROM WorkoutLog W
JOIN Exercises E
ON W.exercise_id = E.exercise_id
GROUP BY E.category; 

-- 5. List exercise name, date, duration, and calories burned

SELECT E.exercise_name, W.date, 
	(W.duration_min *  E.calories_burn_per_min) AS calories_burnt
FROM WorkoutLog W 
JOIN Exercises E 
ON W.exercise_id = E.exercise_id;

-- 6. Show total calories burned per day.

SELECT W.date, SUM(W.duration_min * E.calories_burn_per_min) AS total_calories
FROM WorkoutLog W
JOIN Exercises E 
ON W.exercise_id = E.exercise_id
GROUP BY W.date;

-- 7. Find the exercise that burned the most calories in total.

SELECT exercise_name
FROM (
	SELECT E.exercise_name, SUM(W.duration_min * E.calories_burn_per_min) AS total_burned
    FROM WorkoutLog W
    JOIN Exercises E ON W.exercise_id = E.exercise_id
    GROUP BY E.exercise_name
    ORDER BY total_burned DESC
    LIMIT 1
    ) AS MaxCalories;

-- 8. List exercises never logged in the workout log.

SELECT * FROM Exercises
WHERE exercise_id NOT IN (
    SELECT DISTINCT exercise_id FROM WorkoutLog
);

-- 9. Show workouts where mood was “Tired” and duration > 30 mins.

SELECT * FROM WorkoutLog
WHERE mood = 'Tired' AND duration_min > 30;

-- 10. Update a workout log to correct a wrongly entered mood.

UPDATE WorkoutLog
SET mood = 'Normal'
WHERE log_id = 102;

-- 11. Update the calories per minute for “Running”.

UPDATE Exercises
SET calories_burn_per_min = 12
WHERE exercise_id = 1;
SELECT * FROM Exercises WHERE exercise_name = 'Running';

-- 12. Delete all logs from February 2024.
SET SQL_SAFE_UPDATES = 0;

DELETE FROM WorkoutLog 
WHERE MONTH(date) = 2 AND YEAR(date) = 2024;

SET SQL_SAFE_UPDATES = 1;

