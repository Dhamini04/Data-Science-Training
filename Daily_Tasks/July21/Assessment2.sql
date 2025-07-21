/*Full-Length SQL Assessment

Schema Setup: 3 Tables
1. students
CREATE TABLE students (
student_id INT PRIMARY KEY,
name VARCHAR(100),
age INT,
gender VARCHAR(10),
department_id INT
);

2. departments
CREATE TABLE departments (
department_id INT PRIMARY KEY,
department_name VARCHAR(100),
head_of_department VARCHAR(100)
);

3. courses
CREATE TABLE courses (
course_id INT PRIMARY KEY,
course_name VARCHAR(100),
department_id INT,
credit_hours INT
);
*/

CREATE TABLE students(
student_id INT PRIMARY KEY,
name VARCHAR(100),
age INT,
gender VARCHAR(10),
department_id INT
);

CREATE TABLE departments(
department_id INT PRIMARY KEY,
department_name VARCHAR(100),
head_of_department VARCHAR(100)
);

CREATE TABLE courses (
course_id INT PRIMARY KEY,
course_name VARCHAR(100),
department_id INT,
credit_hours INT 
);

/*
Sample Data for Insertion

students
INSERT INTO students VALUES
(1, 'Amit Sharma', 20, 'Male', 1),
(2, 'Neha Reddy', 22, 'Female', 2),
(3, 'Faizan Ali', 21, 'Male', 1),
(4, 'Divya Mehta', 23, 'Female', 3),
(5, 'Ravi Verma', 22, 'Male', 2);

departments
INSERT INTO departments VALUES
(1, 'Computer Science', 'Dr. Rao'),
(2, 'Electronics', 'Dr. Iyer'),
(3, 'Mechanical', 'Dr. Khan');

courses
INSERT INTO courses VALUES
(101, 'Data Structures', 1, 4),
(102, 'Circuits', 2, 3),
(103, 'Thermodynamics', 3, 4),
(104, 'Algorithms', 1, 3),
(105, 'Microcontrollers', 2, 2);
*/

INSERT INTO students VALUES
(1, 'Amit sharma', 20, 'MALE', 1),
(2, 'Neha Reddy', 22, 'Female', 2),
(3, 'Faizan Ali', 21, 'Female', 1),
(4,'Divya Mehta', 23, 'Female', 3),
(5, 'Ravi Verma', 22, 'Male', 2);

INSERT INTO departments VALUES
(1, 'computer science', 'Dr. Rao'),
(2, 'Electronics', 'Dr. Iyer'),
(3, 'Mechanical', 'DR. Khan');

INSERT INTO courses VALUES
(101, 'Data Structures', 1, 4),
(102, 'Circuits', 2, 3),
(103, 'Thermodynamics', 3, 4),
(104, 'Algorithms', 1, 3),
(105, 'Microcontrollers', 2, 2);

---------------------------Section A: Basic Queries-------------------------------------------

--1. List all students with name, age, and gender.

SELECT name, age, gender FROM  students;

--2. Show names of female students only.

SELECT name FROM students 
WHERE gender = 'Female';

--3. Display all courses offered by the Electronics department.
	
SELECT course_name 
FROM courses c
JOIN departments d
ON c.department_id = d.department_id
WHERE d.department_name = 'Electronics';

--4. Show the department name and head for department_id = 1.
	
SELECT department_name, head_of_department
FROM departments
WHERE department_id = 1;

--5. Display students older than 21 years.

SELECT * from students 
WHERE age >21;

 --Section B: Intermediate Joins & Aggregations --

--6. Show student names along with their department names.

 SELECT name, department_name
 FROM students s
 JOIN departments d
 ON s.department_id = d.department_id;

--7. List all departments with number of students in each.

 SELECT d.department_name, COUNT(s.student_id) AS num_students
 FROM departments d
 LEFT JOIN  students s
 ON d.department_id = s.department_id
 GROUP BY d.department_name;

--8. Find the average age of students per department.

 SELECT d.department_name, avg(s.age) AS avg_age
 FROM  departments d
 JOIN students s
 ON d.department_id = s.department_id
 GROUP BY department_name;

--9. Show all courses with their respective department names

 SELECT c.course_name, d.department_name
 FROM courses c
 JOIN departments d
 ON c.department_id = d.department_id;

--10. List departments that have no students enrolled.

 SELECT department_name
 FROM departments d
 LEFT JOIN students s
 on d.department_id = s.department_id
 WHERE student_id IS NULL;

--11. Show the department that has the highest number of courses.

 SELECT d.department_name, COUNT(c.course_id) as course_count
 FROM departments d
 JOIN courses c
 ON d.department_id = c.department_id
 GROUP BY department_name
 ORDER BY course_count DESC
 LIMIT 1;

--------------------Section C: Subqueries & Advanced Filters--------------------------------

--12. Find names of students whose age is above the average age of all students.

SELECT NAME 
FROM students 
WHERE age > (SELECT AVG(age) FROM students);

--13. Show all departments that offer courses with more than 3 credit hours.
	
 SELECT DISTINCT d.department_name
 FROM departments d
 JOIN courses c
 ON d.department_id = c.department_id
 WHERE c.credit_hours> 3;

--14. Display names of students who are enrolled in the department with the fewest courses.

 SELECT name 
 FROM students 
 WHERE department_id = 
 ( SELECT department_id 
   FROM courses
   GROUP BY department_id
   ORDER BY COUNT(*) ASC
   limit 1
   );

--15. List the names of students in departments where the HOD's name contains 'Dr.'.

SELECT s.name 
FROM students s
JOIN departments d
ON s.department_id = d.department_id
WHERE head_of_department like '%Dr.%';

--16. Find the second oldest student (use subquery or LIMIT/OFFSET method).

SELECT * FROM students 
ORDER BY age DESC 
LIMIT 1 OFFSET 1;

--17. Show all courses that belong to departments with more than 2 students.

SELECT course_name
FROM courses c
WHERE c.department_id IN (
SELECT  department_id
from students 
GROUP BY department_id
Having count(*)> 2
);
 

 
