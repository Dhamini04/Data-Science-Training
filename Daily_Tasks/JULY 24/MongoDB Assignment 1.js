////////////////////MongoDB Assignment: E-Commerce Store Analytics//////////////////////////////


use E-CommerceStoreDB
switched to db E-CommerceStoreDB
db.products.insertMany([
  { product_id: 1001, name: "Wireless Mouse", category: "Electronics", price: 750, stock: 120 },
  { product_id: 1002, name: "Bluetooth Speaker", category: "Electronics", price: 2200, stock: 80 },
  { product_id: 1003, name: "Yoga Mat", category: "Fitness", price: 599, stock: 150 },
  { product_id: 1004, name: "Office Chair", category: "Furniture", price: 7500, stock: 40 },
  { product_id: 1005, name: "Running Shoes", category: "Footwear", price: 3500, stock: 60 }
]);
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('6881fa7c5088b7525f2970e7'),
    '1': ObjectId('6881fa7c5088b7525f2970e8'),
    '2': ObjectId('6881fa7c5088b7525f2970e9'),
    '3': ObjectId('6881fa7c5088b7525f2970ea'),
    '4': ObjectId('6881fa7c5088b7525f2970eb')
  }
}
db.orders.insertMany([
  { order_id: 5001, customer: "Ravi Shah", product_id: 1001, quantity: 2, order_date: new Date("2024-07-01") },
  { order_id: 5002, customer: "Sneha Mehta", product_id: 1002, quantity: 1, order_date: new Date("2024-07-02") },
  { order_id: 5003, customer: "Arjun Verma", product_id: 1003, quantity: 3, order_date: new Date("2024-07-03") },
  { order_id: 5004, customer: "Neha Iyer", product_id: 1001, quantity: 1, order_date: new Date("2024-07-04") },
  { order_id: 5005, customer: "Mohit Jain", product_id: 1005, quantity: 2, order_date: new Date("2024-07-05") }
]);
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('6881fa945088b7525f2970ec'),
    '1': ObjectId('6881fa945088b7525f2970ed'),
    '2': ObjectId('6881fa945088b7525f2970ee'),
    '3': ObjectId('6881fa945088b7525f2970ef'),
    '4': ObjectId('6881fa945088b7525f2970f0')
  }
}

//1. List all products in the Electronics category

db.products.find({ category: "Electronics" });
{
  _id: ObjectId('6881fa7c5088b7525f2970e7'),
  product_id: 1001,
  name: 'Wireless Mouse',
  category: 'Electronics',
  price: 750,
  stock: 120
}
{
  _id: ObjectId('6881fa7c5088b7525f2970e8'),
  product_id: 1002,
  name: 'Bluetooth Speaker',
  category: 'Electronics',
  price: 2200,
  stock: 80
}

//2. Find all orders placed by Ravi Shah

db.orders.find({ customer: "Ravi Shah" });
{
  _id: ObjectId('6881fa945088b7525f2970ec'),
  order_id: 5001,
  customer: 'Ravi Shah',
  product_id: 1001,
  quantity: 2,
  order_date: 2024-07-01T00:00:00.000Z
}

//3. Show all orders placed after July 2, 2024

db.orders.find({ order_date: { $gt: new Date("2024-07-02") } });
{
  _id: ObjectId('6881fa945088b7525f2970ee'),
  order_id: 5003,
  customer: 'Arjun Verma',
  product_id: 1003,
  quantity: 3,
  order_date: 2024-07-03T00:00:00.000Z
}
{
  _id: ObjectId('6881fa945088b7525f2970ef'),
  order_id: 5004,
  customer: 'Neha Iyer',
  product_id: 1001,
  quantity: 1,
  order_date: 2024-07-04T00:00:00.000Z
}
{
  _id: ObjectId('6881fa945088b7525f2970f0'),
  order_id: 5005,
  customer: 'Mohit Jain',
  product_id: 1005,
  quantity: 2,
  order_date: 2024-07-05T00:00:00.000Z
}

//4. Display the product with stock less than 50

db.products.find({ stock: { $lt: 50 } });
{
  _id: ObjectId('6881fa7c5088b7525f2970ea'),
  product_id: 1004,
  name: 'Office Chair',
  category: 'Furniture',
  price: 7500,
  stock: 40
}

//5. Show all products that cost more than ₹2000

db.products.find({ price: { $gt: 2000 } });
{
  _id: ObjectId('6881fa7c5088b7525f2970e8'),
  product_id: 1002,
  name: 'Bluetooth Speaker',
  category: 'Electronics',
  price: 2200,
  stock: 80
}
{
  _id: ObjectId('6881fa7c5088b7525f2970ea'),
  product_id: 1004,
  name: 'Office Chair',
  category: 'Furniture',
  price: 7500,
  stock: 40
}
{
  _id: ObjectId('6881fa7c5088b7525f2970eb'),
  product_id: 1005,
  name: 'Running Shoes',
  category: 'Footwear',
  price: 3500,
  stock: 60
}

//6. Use $lookup to show each order with product name and price

db.orders.aggregate([
  {
    $lookup: {
      from: "products",
      localField: "product_id",
      foreignField: "product_id",
      as: "product_info"
    }
  },
  {
    $unwind: "$product_info"
  },
  {
    $project: {
      order_id: 1,
      customer: 1,
      product: "$product_info.name",
      price: "$product_info.price",
      quantity: 1,
      order_date: 1
    }
  }
]);
{
  _id: ObjectId('6881fa945088b7525f2970ec'),
  order_id: 5001,
  customer: 'Ravi Shah',
  quantity: 2,
  order_date: 2024-07-01T00:00:00.000Z,
  product: 'Wireless Mouse',
  price: 750
}
{
  _id: ObjectId('6881fa945088b7525f2970ed'),
  order_id: 5002,
  customer: 'Sneha Mehta',
  quantity: 1,
  order_date: 2024-07-02T00:00:00.000Z,
  product: 'Bluetooth Speaker',
  price: 2200
}
{
  _id: ObjectId('6881fa945088b7525f2970ee'),
  order_id: 5003,
  customer: 'Arjun Verma',
  quantity: 3,
  order_date: 2024-07-03T00:00:00.000Z,
  product: 'Yoga Mat',
  price: 599
}
{
  _id: ObjectId('6881fa945088b7525f2970ef'),
  order_id: 5004,
  customer: 'Neha Iyer',
  quantity: 1,
  order_date: 2024-07-04T00:00:00.000Z,
  product: 'Wireless Mouse',
  price: 750
}
{
  _id: ObjectId('6881fa945088b7525f2970f0'),
  order_id: 5005,
  customer: 'Mohit Jain',
  quantity: 2,
  order_date: 2024-07-05T00:00:00.000Z,
  product: 'Running Shoes',
  price: 3500
}

//7. Find total amount spent by each customer (price × quantity)


db.orders.aggregate([
  {
    $lookup: {
      from: "products",
      localField: "product_id",
      foreignField: "product_id",
      as: "product_info"
    }
  },
  { $unwind: "$product_info" },
  {
    $project: {
      order_id: 1,
      customer: 1,
      category: "$product_info.category",
      order_date: 1
    }
  }
]);
{
  _id: ObjectId('6881fa945088b7525f2970ec'),
  order_id: 5001,
  customer: 'Ravi Shah',
  order_date: 2024-07-01T00:00:00.000Z,
  category: 'Electronics'
}
{
  _id: ObjectId('6881fa945088b7525f2970ed'),
  order_id: 5002,
  customer: 'Sneha Mehta',
  order_date: 2024-07-02T00:00:00.000Z,
  category: 'Electronics'
}
{
  _id: ObjectId('6881fa945088b7525f2970ee'),
  order_id: 5003,
  customer: 'Arjun Verma',
  order_date: 2024-07-03T00:00:00.000Z,
  category: 'Fitness'
}
{
  _id: ObjectId('6881fa945088b7525f2970ef'),
  order_id: 5004,
  customer: 'Neha Iyer',
  order_date: 2024-07-04T00:00:00.000Z,
  category: 'Electronics'
}
{
  _id: ObjectId('6881fa945088b7525f2970f0'),
  order_id: 5005,
  customer: 'Mohit Jain',
  order_date: 2024-07-05T00:00:00.000Z,
  category: 'Footwear'
}


//8. List all orders along with category of the product.

db.orders.aggregate([
  {
    $lookup: {
      from: "products",
      localField: "product_id",
      foreignField: "product_id",
      as: "product_info"
    }
  },
  { $unwind: "$product_info" },
  { $match: { "product_info.category": "Fitness" } },
  { $group: { _id: "$customer" } }
]);
{
  _id: 'Arjun Verma'
}

//9. Find customers who ordered any Fitness product


db.orders.aggregate([
  {
    $lookup: {
      from: "products",
      localField: "product_id",
      foreignField: "product_id",
      as: "product_info"
    }
  },
  { $unwind: "$product_info" },
  { $match: { "product_info.category": "Fitness" } },
  { $group: { _id: "$customer" } }
]);
{
  _id: 'Arjun Verma'
}

//10. Find the total sales per product category


db.orders.aggregate([
  {
    $lookup: {
      from: "products",
      localField: "product_id",
      foreignField: "product_id",
      as: "product_info"
    }
  },
  { $unwind: "$product_info" },
  {
    $group: {
      _id: "$product_info.category",
      total_sales: {
        $sum: { $multiply: ["$quantity", "$product_info.price"] }
      }
    }
  }
]);
{
  _id: 'Electronics',
  total_sales: 4450
}
{
  _id: 'Fitness',
  total_sales: 1797
}
{
  _id: 'Footwear',
  total_sales: 7000
}
E-CommerceStoreDB

