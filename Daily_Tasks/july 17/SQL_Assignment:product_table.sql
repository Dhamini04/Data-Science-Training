/*--SQL Assignment: products Table

Task 1: Create a Table

Create a table named products with the following columns:

product_id (INT, Primary Key)

product_name (VARCHAR)

category (VARCHAR)

price (DECIMAL)

stock quantity (INT)

added_date (DATE)
*/

create table products (
product_id int primary key,
product_name VARCHAR(100),
category VARCHAR(50),
price DECIMAL(10, 2),
stock_quantity INT,
Added_date DATE
);


/* Task 2: Insert Records

Insert at least 5 different products, each with a unique category and price range. Use realistic product names (e.g., headphones, mouse, laptop, etc.).
*/

insert into products VALUES
(1, 'cap', 'fashion', 200.00 , 500, '2025-05-04'),
(2, 'headphones','gadgets', 899.00, 60,'2025-04-06'),
(3, 'laptop', 'gadgets', 700000.00, 700, '2024-06-03'),
(4, 'mouse', 'electronics', 299.00, 1000, '2024-08-09'),
(5, 'dress', 'clothing', 799.00, 1232, '2025-05-06');

--Task 3: Write Queries
--1. List all products.
select * from products;

--2. Display only product_name and price.

select product_name , price from products;

--4. Find products with price between 500 and 2000.

select * from products 
where price between 500 AND 2000;

--3. Find products with stock_quantity less than 10.

select * from products 
where stock_quantity < 10 ;

--5. Show products added after 2023-01-01.

select * from products 
where Added_date > '2023-01-01' ;

--6. List all products whose names start with 'S'.

select * from products 
where product_name like '%s';

--7. Show all products that belong to either Electronics or Furniture.

select * from products 
where category in ('electronics', 'gadgets');

/*Task 4: Update & Delete*/
--1. Update the price of one product.

UPDATE products
set price = 60000.00
where product_id = 3;

--2. Increase stock of all products in a specific category by 5.

UPDATE products SET stock_quantity = stock_quantity + 5 WHERE category = 'laptop' and product_id = 3;

--3.Delete one product based on its product_id.

delete from products where product_id = 2;

--4. Delete all products with stock_quantity = 0.

SET SQL_SAFE_UPDATES = 0;
DELETE FROM products WHERE stock_quantity = 0;
SELECT * FROM products;
SET SQL_SAFE_UPDATES = 1;
