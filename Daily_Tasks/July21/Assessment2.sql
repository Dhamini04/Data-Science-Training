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

SELECT name, age, gender FROM  students;

SELECT name FROM students 
WHERE gender = 'Female';

SELECT course_name 
FROM courses c
JOIN departments d
ON c.department_id = d.department_id
WHERE d.department_name = 'Electronics';

SELECT department_name, head_of_department
FROM departments
WHERE department_id = 1;

SELECT * from students 
WHERE age >21;

 /*Section B: Joins & Aggregations*/
 
 SELECT name, department_name
 FROM students s
 JOIN departments d
 ON s.department_id = d.department_id;
 
 SELECT d.department_name, COUNT(s.student_id) AS num_students
 FROM departments d
 LEFT JOIN  students s
 ON d.department_id = s.department_id
 GROUP BY d.department_name;
 
 SELECT d.department_name, avg(s.age) AS avg_age
 FROM  departments d
 JOIN students s
 ON d.department_id = s.department_id
 GROUP BY department_name;
 
 SELECT c.course_name, d.department_name
 FROM courses c
 JOIN departments d
 ON c.department_id = d.department_id;
 
 SELECT department_name
 FROM departments d
 LEFT JOIN students s
 on d.department_id = s.department_id
 WHERE student_id IS NULL;
 
 SELECT d.department_name, COUNT(c.course_id) as course_count
 FROM departments d
 JOIN courses c
 ON d.department_id = c.department_id
 GROUP BY department_name
 ORDER BY course_count DESC
 LIMIT 1;
 
SELECT NAME 
FROM students 
WHERE age > (SELECT AVG(age) FROM students);
 
 SELECT DISTINCT d.department_name
 FROM departments d
 JOIN courses c
 ON d.department_id = c.department_id
 WHERE c.credit_hours> 3;
 
 SELECT name 
 FROM students 
 WHERE department_id = 
 ( SELECT department_id 
   FROM courses
   GROUP BY department_id
   ORDER BY COUNT(*) ASC
   limit 1
   );
		
SELECT s.name 
FROM students s
JOIN departments d
ON s.department_id = d.department_id
WHERE head_of_department like '%Dr.%';

SELECT * FROM students 
ORDER BY age DESC 
LIMIT 1 OFFSET 1;

SELECT course_name
FROM courses c
WHERE c.department_id IN (
SELECT  department_id
from students 
GROUP BY department_id
Having count(*)> 2
);
 

 