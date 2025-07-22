
//MongoDB Practical Assignment – Bookstore Management

use bookstoreDB
switched to db bookstoreDB
db["books"].find()
/*PART 1: Create Collections
Create
1. books
Fields:
book_id (Number)
title (String)
author (String)
genre (String)
price (Number)
stock (Number)


2. customers
Fields:
customer_id (Number)
name (String)
email (String)
city (String)

3. orders
Fields:
order_id (Number)
customer_id (Number)
book_id (Number)
order_date (ISODate)
quantity (Number)


􀀀 PART 2: Insert Sample Data
Insert at least:
5 books (mix of genres and price points)
5 customers (different cities)
7 orders (various combinations of books & customers)
􀀀 Sample Insert Example:
db.books.insertOne({
book_id: 101,
title: "The AI Revolution",
author: "Ray Kurzweil",*/

//books 
db.books.insertMany([
  {
    book_id: 101,
    title: "The AI Revolution",
    author: "Ray Kurzweil",
    genre: "Technology",
    price: 799,
    stock: 20
  },
  {
    book_id: 102,
    title: "The Midnight Library",
    author: "Matt Haig",
    genre: "Fiction",
    price: 499,
    stock: 15
  },
  {
    book_id: 103,
    title: "Deep Work",
    author: "Cal Newport",
    genre: "Productivity",
    price: 620,
    stock: 10
  },
  {
    book_id: 104,
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "Programming",
    price: 850,
    stock: 8
  },
  {
    book_id: 105,
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-help",
    price: 550,
    stock: 12
  }
]);
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('687f139be8c4f8a17c63e0b1'),
    '1': ObjectId('687f139be8c4f8a17c63e0b2'),
    '2': ObjectId('687f139be8c4f8a17c63e0b3'),
    '3': ObjectId('687f139be8c4f8a17c63e0b4'),
    '4': ObjectId('687f139be8c4f8a17c63e0b5')
  }
}


//customers

db.customers.insertMany([
  {
    customer_id: 201,
    name: "Amit Sharma",
    email: "amit@gmail.com",
    city: "Hyderabad"
  },
  {
    customer_id: 202,
    name: "Neha Reddy",
    email: "neha@yahoo.com",
    city: "Bangalore"
  },
  {
    customer_id: 203,
    name: "Ravi Verma",
    email: "ravi@gmail.com",
    city: "Delhi"
  },
  {
    customer_id: 204,
    name: "Divya Mehta",
    email: "divya@hotmail.com",
    city: "Hyderabad"
  },
  {
    customer_id: 205,
    name: "Faizan Ali",
    email: "faizan@gmail.com",
    city: "Chennai"
  }
]);
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('687f13c6e8c4f8a17c63e0b6'),
    '1': ObjectId('687f13c6e8c4f8a17c63e0b7'),
    '2': ObjectId('687f13c6e8c4f8a17c63e0b8'),
    '3': ObjectId('687f13c6e8c4f8a17c63e0b9'),
    '4': ObjectId('687f13c6e8c4f8a17c63e0ba')
  }
}


//orders

db.orders.insertMany([
  {
    order_id: 301,
    customer_id: 201,
    book_id: 101,
    order_date: ISODate("2023-01-05"),
    quantity: 2
  },
  {
    order_id: 302,
    customer_id: 202,
    book_id: 103,
    order_date: ISODate("2023-02-15"),
    quantity: 1
  },
  {
    order_id: 303,
    customer_id: 204,
    book_id: 102,
    order_date: ISODate("2023-03-10"),
    quantity: 3
  },
  {
    order_id: 304,
    customer_id: 205,
    book_id: 105,
    order_date: ISODate("2022-12-20"),
    quantity: 1
  },
  {
    order_id: 305,
    customer_id: 203,
    book_id: 102,
    order_date: ISODate("2023-05-01"),
    quantity: 1
  },
  {
    order_id: 306,
    customer_id: 204,
    book_id: 101,
    order_date: ISODate("2023-06-10"),
    quantity: 1
  },
  {
    order_id: 307,
    customer_id: 201,
    book_id: 103,
    order_date: ISODate("2023-07-01"),
    quantity: 2
  }
]);
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('687f13d3e8c4f8a17c63e0bb'),
    '1': ObjectId('687f13d3e8c4f8a17c63e0bc'),
    '2': ObjectId('687f13d3e8c4f8a17c63e0bd'),
    '3': ObjectId('687f13d3e8c4f8a17c63e0be'),
    '4': ObjectId('687f13d3e8c4f8a17c63e0bf'),
    '5': ObjectId('687f13d3e8c4f8a17c63e0c0'),
    '6': ObjectId('687f13d3e8c4f8a17c63e0c1')
  }
}

// PART 3: Write Queries

//Basic Queries:
//1. List all books priced above 500.

db.books.find({price: {$gt: 500}}); 
{
  _id: ObjectId('687f1306e8c4f8a17c63e0b0'),
  book_id: 101,
  title: 'The AI Revolution',
  author: 'Ray Kurzweil',
  genre: 'Technology',
  price: 799,
  stock: 20
}
{
  _id: ObjectId('687f139be8c4f8a17c63e0b1'),
  book_id: 101,
  title: 'The AI Revolution',
  author: 'Ray Kurzweil',
  genre: 'Technology',
  price: 799,
  stock: 20
}
{
  _id: ObjectId('687f139be8c4f8a17c63e0b3'),
  book_id: 103,
  title: 'Deep Work',
  author: 'Cal Newport',
  genre: 'Productivity',
  price: 620,
  stock: 10
}
{
  _id: ObjectId('687f139be8c4f8a17c63e0b4'),
  book_id: 104,
  title: 'Clean Code',
  author: 'Robert C. Martin',
  genre: 'Programming',
  price: 850,
  stock: 8
}
{
  _id: ObjectId('687f139be8c4f8a17c63e0b5'),
  book_id: 105,
  title: 'Atomic Habits',
  author: 'James Clear',
  genre: 'Self-help',
  price: 550,
  stock: 12
}

//2. Show all customers from ‘Hyderabad’.

db.customers.find({city: 'Hyderabad'});
{
  _id: ObjectId('687f13c6e8c4f8a17c63e0b6'),
  customer_id: 201,
  name: 'Amit Sharma',
  email: 'amit@gmail.com',
  city: 'Hyderabad'
}
{
  _id: ObjectId('687f13c6e8c4f8a17c63e0b9'),
  customer_id: 204,
  name: 'Divya Mehta',
  email: 'divya@hotmail.com',
  city: 'Hyderabad'
}

//3. Find all orders placed after January 1, 2023.

db.orders.find({order_date: {$gt : ISODate("2023-01-01")}});
{
  _id: ObjectId('687f13d3e8c4f8a17c63e0bb'),
  order_id: 301,
  customer_id: 201,
  book_id: 101,
  order_date: 2023-01-05T00:00:00.000Z,
  quantity: 2
}
{
  _id: ObjectId('687f13d3e8c4f8a17c63e0bc'),
  order_id: 302,
  customer_id: 202,
  book_id: 103,
  order_date: 2023-02-15T00:00:00.000Z,
  quantity: 1
}
{
  _id: ObjectId('687f13d3e8c4f8a17c63e0bd'),
  order_id: 303,
  customer_id: 204,
  book_id: 102,
  order_date: 2023-03-10T00:00:00.000Z,
  quantity: 3
}
{
  _id: ObjectId('687f13d3e8c4f8a17c63e0bf'),
  order_id: 305,
  customer_id: 203,
  book_id: 102,
  order_date: 2023-05-01T00:00:00.000Z,
  quantity: 1
}
{
  _id: ObjectId('687f13d3e8c4f8a17c63e0c0'),
  order_id: 306,
  customer_id: 204,
  book_id: 101,
  order_date: 2023-06-10T00:00:00.000Z,
  quantity: 1
}
{
  _id: ObjectId('687f13d3e8c4f8a17c63e0c1'),
  order_id: 307,
  customer_id: 201,
  book_id: 103,
  order_date: 2023-07-01T00:00:00.000Z,
  quantity: 2
}


//Joins via $lookup :

//4. Display order details with customer name and book title.

db.orders.aggregate([
  {
    $lookup: {
      from: "customers",
      localField: "customer_id",
      foreignField: "customer_id",
      as: "customer"
    }
  },
  {
    $lookup: {
      from: "books",
      localField: "book_id",
      foreignField: "book_id",
      as: "book"
    }
  },
  {
    $project: {
      order_id: 1,
      quantity: 1,
      "customer.name": 1,
      "book.title": 1,
      order_date: 1
    }
  }
]);
{
  _id: ObjectId('687f13d3e8c4f8a17c63e0bb'),
  order_id: 301,
  order_date: 2023-01-05T00:00:00.000Z,
  quantity: 2,
  customer: [
    {
      name: 'Amit Sharma'
    }
  ],
  book: [
    {
      title: 'The AI Revolution'
    },
    {
      title: 'The AI Revolution'
    }
  ]
}
{
  _id: ObjectId('687f13d3e8c4f8a17c63e0bc'),
  order_id: 302,
  order_date: 2023-02-15T00:00:00.000Z,
  quantity: 1,
  customer: [
    {
      name: 'Neha Reddy'
    }
  ],
  book: [
    {
      title: 'Deep Work'
    }
  ]
}
{
  _id: ObjectId('687f13d3e8c4f8a17c63e0bd'),
  order_id: 303,
  order_date: 2023-03-10T00:00:00.000Z,
  quantity: 3,
  customer: [
    {
      name: 'Divya Mehta'
    }
  ],
  book: [
    {
      title: 'The Midnight Library'
    }
  ]
}
{
  _id: ObjectId('687f13d3e8c4f8a17c63e0be'),
  order_id: 304,
  order_date: 2022-12-20T00:00:00.000Z,
  quantity: 1,
  customer: [
    {
      name: 'Faizan Ali'
    }
  ],
  book: [
    {
      title: 'Atomic Habits'
    }
  ]
}
{
  _id: ObjectId('687f13d3e8c4f8a17c63e0bf'),
  order_id: 305,
  order_date: 2023-05-01T00:00:00.000Z,
  quantity: 1,
  customer: [
    {
      name: 'Ravi Verma'
    }
  ],
  book: [
    {
      title: 'The Midnight Library'
    }
  ]
}
{
  _id: ObjectId('687f13d3e8c4f8a17c63e0c0'),
  order_id: 306,
  order_date: 2023-06-10T00:00:00.000Z,
  quantity: 1,
  customer: [
    {
      name: 'Divya Mehta'
    }
  ],
  book: [
    {
      title: 'The AI Revolution'
    },
    {
      title: 'The AI Revolution'
    }
  ]
}
{
  _id: ObjectId('687f13d3e8c4f8a17c63e0c1'),
  order_id: 307,
  order_date: 2023-07-01T00:00:00.000Z,
  quantity: 2,
  customer: [
    {
      name: 'Amit Sharma'
    }
  ],
  book: [
    {
      title: 'Deep Work'
    }
  ]
}


//5. Show total quantity ordered for each book.


db.orders.aggregate([
  {
    $group: {
      _id:"$book_id",
      total_quantity:{$sum:"$quantity"}
    }
  } 
]);

{
  _id: 103,
  total_quantity: 3
}
{
  _id: 102,
  total_quantity: 4
}
{
  _id: 101,
  total_quantity: 3
}
{
  _id: 105,
  total_quantity: 1
}

//6. Show the total number of orders placed by each customer.

db.orders.aggregate([
  {
    $group: {
      _id:"$customer_id",
      total_orders: {$sum: 1}
    }
  }
]);
{
  _id: 204,
  total_orders: 2
}
{
  _id: 202,
  total_orders: 1
}
{
  _id: 205,
  total_orders: 1
}
{
  _id: 201,
  total_orders: 2
}
{
  _id: 203,
  total_orders: 1
}


// Aggregation Queries:
//7. Calculate total revenue generated per book.


db.orders.aggregate([
  {
    $lookup: {
      from: "books",
      localField: "book_id",
      foreignField: "book_id",
      as: "book"
    }
  },
  { $unwind: "$book" },
  {
    $group: {
      _id: "$book_id",
      total_revenue: {
        $sum: { $multiply: ["$quantity", "$book.price"] }
      }
    }
  }
]);
{
  _id: 105,
  total_revenue: 550
}
{
  _id: 101,
  total_revenue: 4794
}
{
  _id: 102,
  total_revenue: 1996
}
{
  _id: 103,
  total_revenue: 1860
}


//8. Find the book with the highest total revenue.


db.orders.aggregate([
  {
    $lookup: {
      from: "books",
      localField: "book_id",
      foreignField: "book_id",
      as: "book"
  }
  },
  { $unwind: "$book" },
  {
    $group:{
      _id:"$book_id",
      title:{$first: "$book.tittle"},
      total_revenue:{
        $sum: {$multiply: ['$quantity','$book.price']}
      }
    }
  },
  {$sort: {total_revenue:-1}},
  {$limit: 1}
]);
{
  _id: 101,
  title: null,
  total_revenue: 4794
}



//9. List genres and total books sold in each genre.


db.orders.aggregate([
  {
    $lookup: {
      from: "books",
      localField: "book_id",
      foreignField: "book_id",
      as: "book"
    }
  },
  { $unwind: "$book" },
  {
    $group: {
      _id: "$book.genre",
      total_sold: { $sum: "$quantity" }
    }
  }
]);
{
  _id: 'Technology',
  total_sold: 6
}
{
  _id: 'Fiction',
  total_sold: 4
}
{
  _id: 'Self-help',
  total_sold: 1
}
{
  _id: 'Productivity',
  total_sold: 3
}

//Show customers who ordered more than 2 different books.
//added one insertion to get the desired outcome
db.orders.insertOne({
  order_id: 308,
  customer_id: 201,
  book_id: 102,
  order_date: ISODate("2023-07-20"),
  quantity: 1
});
{
  acknowledged: true,
  insertedId: ObjectId('687f23b8e8c4f8a17c63e0c2')
}

//10.Show customers who ordered more than 2 different books.

db.orders.aggregate([
  {
    $group: {
      _id: "$customer_id",
      unique_books: { $addToSet: "$book_id" }
    }
  },
  {
    $project: {
      customer_id: "$_id",
      book_count: { $size: "$unique_books" }
    }
  },
  {
    $match: {
      book_count: { $gt: 2 }
    }
  }
]);
{
  _id: 201,
  customer_id: 201,
  book_count: 3
}
bookstoreDB


