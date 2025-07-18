
create table products (
product_id int primary key,
product_name VARCHAR(100),
category VARCHAR(50),
price DECIMAL(10, 2),
stock_quantity INT,
Added_date DATE
);

insert into products VALUES
(1, 'cap', 'fashion', 200.00 , 500, '2025-05-04'),
(2, 'headphones','gadgets', 899.00, 60,'2025-04-06'),
(3, 'laptop', 'gadgets', 700000.00, 700, '2024-06-03'),
(4, 'mouse', 'electronics', 299.00, 1000, '2024-08-09'),
(5, 'dress', 'clothing', 799.00, 1232, '2025-05-06');

select * from products;

select product_name , price from products;

select * from products 
where price between 500 AND 2000;

select * from products 
where stock_quantity < 100 ;

select * from products 
where Added_date > '2023-01-01' ;

select * from products 
where product_name like '%s';

select * from products 
where category in ('electronics', 'gadgets');

UPDATE products
set price = 60000.00
where product_id = 3;


UPDATE products SET stock_quantity = stock_quantity + 5 WHERE category = 'laptop' and product_id = 3;

delete from products where product_id = 2;


SET SQL_SAFE_UPDATES = 0;
DELETE FROM products WHERE stock_quantity = 0;
SELECT * FROM products;
SET SQL_SAFE_UPDATES = 1;
