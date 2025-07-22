//MongoDB Assignment: Retail Store Inventory & Sales

use RetailStoreInventory&SalesDB
switched to db RetailStoreInventory&SalesDB


/*
Insert Sample Data
1 􀀀 Create Collection: products
db.products.insertMany([
{ product_id: 101, name: "Laptop", category: "Electronics", price: 55000, stock: 30
},
{ product_id: 102, name: "Mobile", category: "Electronics", price: 25000, stock: 50
},
{ product_id: 103, name: "Chair", category: "Furniture", price: 3000, stock: 100 },
{ product_id: 104, name: "Desk", category: "Furniture", price: 7000, stock: 40 },
{ product_id: 105, name: "Book", category: "Stationery", price: 250, stock: 200 }
])
*/

db.products.insertMany([
{ product_id: 101, name: "Laptop", category: "Electronics", price: 55000, stock: 30
},
{ product_id: 102, name: "Mobile", category: "Electronics", price: 25000, stock: 50
},
{ product_id: 103, name: "Chair", category: "Furniture", price: 3000, stock: 100 },
{ product_id: 104, name: "Desk", category: "Furniture", price: 7000, stock: 40 },
{ product_id: 105, name: "Book", category: "Stationery", price: 250, stock: 200 }
]);
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('687f5871c0680f15182ab2d1'),
    '1': ObjectId('687f5871c0680f15182ab2d2'),
    '2': ObjectId('687f5871c0680f15182ab2d3'),
    '3': ObjectId('687f5871c0680f15182ab2d4'),
    '4': ObjectId('687f5871c0680f15182ab2d5')
  }
}

/*2  Create Collection: sales
db.sales.insertMany([
{ sale_id: 1, product_id: 101, quantity: 2, date: new Date("2024-08-10"), customer:
"Ravi" },
{ sale_id: 2, product_id: 102, quantity: 3, date: new Date("2024-08-12"), customer:
"Ayesha" },
{ sale_id: 3, product_id: 103, quantity: 5, date: new Date("2024-08-14"), customer:
"Ravi" },
{ sale_id: 4, product_id: 104, quantity: 1, date: new Date("2024-08-14"), customer:
"John" },
{ sale_id: 5, product_id: 105, quantity: 10, date: new Date("2024-08-15"), customer:
"Meena" }
])*/


db.sales.insertMany([
{ sale_id: 1, product_id: 101, quantity: 2, date: new Date("2024-08-10"), customer:
"Ravi" },
{ sale_id: 2, product_id: 102, quantity: 3, date: new Date("2024-08-12"), customer:
"Ayesha" },
{ sale_id: 3, product_id: 103, quantity: 5, date: new Date("2024-08-14"), customer:
"Ravi" },
{ sale_id: 4, product_id: 104, quantity: 1, date: new Date("2024-08-14"), customer:
"John" },
{ sale_id: 5, product_id: 105, quantity: 10, date: new Date("2024-08-15"), customer:
"Meena" }
]);
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('687f5886c0680f15182ab2d6'),
    '1': ObjectId('687f5886c0680f15182ab2d7'),
    '2': ObjectId('687f5886c0680f15182ab2d8'),
    '3': ObjectId('687f5886c0680f15182ab2d9'),
    '4': ObjectId('687f5886c0680f15182ab2da')
  }
}

//1. Find all products in the Electronics category.

db.products.find({category: "Electronics"});
{
  _id: ObjectId('687f5871c0680f15182ab2d1'),
  product_id: 101,
  name: 'Laptop',
  category: 'Electronics',
  price: 55000,
  stock: 30
}


{
  _id: ObjectId('687f5871c0680f15182ab2d2'),
  product_id: 102,
  name: 'Mobile',
  category: 'Electronics',
  price: 25000,
  stock: 50
}

//2. List all sales made by Ravi.

db.sales.find({customer: "Ravi"});
{
  _id: ObjectId('687f5886c0680f15182ab2d6'),
  sale_id: 1,
  product_id: 101,
  quantity: 2,
  date: 2024-08-10T00:00:00.000Z,
  customer: 'Ravi'
}
{
  _id: ObjectId('687f5886c0680f15182ab2d8'),
  sale_id: 3,
  product_id: 103,
  quantity: 5,
  date: 2024-08-14T00:00:00.000Z,
  customer: 'Ravi'
}

//3. Get details of products whose price is more than 5,000.


db.products.find({price: {$gt: 5000}});
{
  _id: ObjectId('687f5871c0680f15182ab2d1'),
  product_id: 101,
  name: 'Laptop',
  category: 'Electronics',
  price: 55000,
  stock: 30
}
{
  _id: ObjectId('687f5871c0680f15182ab2d2'),
  product_id: 102,
  name: 'Mobile',
  category: 'Electronics',
  price: 25000,
  stock: 50
}
{
  _id: ObjectId('687f5871c0680f15182ab2d4'),
  product_id: 104,
  name: 'Desk',
  category: 'Furniture',
  price: 7000,
  stock: 40
}

//4. Find all products with stock less than 50.

db.products.find({stock:{$lt: 50}});
{
  _id: ObjectId('687f5871c0680f15182ab2d1'),
  product_id: 101,
  name: 'Laptop',
  category: 'Electronics',
  price: 55000,
  stock: 30
}
{
  _id: ObjectId('687f5871c0680f15182ab2d4'),
  product_id: 104,
  name: 'Desk',
  category: 'Furniture',
  price: 7000,
  stock: 40
}

//5. Show all products sold on 2024-08-14.

db.sales.find({ date: ISODate("2024-08-14") });
{
  _id: ObjectId('687f5886c0680f15182ab2d8'),
  sale_id: 3,
  product_id: 103,
  quantity: 5,
  date: 2024-08-14T00:00:00.000Z,
  customer: 'Ravi'
}
{
  _id: ObjectId('687f5886c0680f15182ab2d9'),
  sale_id: 4,
  product_id: 104,
  quantity: 1,
  date: 2024-08-14T00:00:00.000Z,
  customer: 'John'
}


// Aggregation & Join-style Operations
//6. For each product, show total quantity sold.


db.sales.aggregate([
  { $lookup: {
      from: "products",
      localField: "product_id",
      foreignField: "product_id",
      as: "product"
    }
  },
  { $unwind: "$product" },
  { $group: {
      _id: "$product_id",
      name: { $first: "$product.name" },
      revenue: { $sum: { $multiply: ["$quantity", "$product.price"] } }
    }
  }
]);
{
  _id: 104,
  name: 'Desk',
  revenue: 7000
}
{
  _id: 103,
  name: 'Chair',
  revenue: 15000
}
{
  _id: 105,
  name: 'Book',
  revenue: 2500
}
{
  _id: 102,
  name: 'Mobile',
  revenue: 75000
}
{
  _id: 101,
  name: 'Laptop',
  revenue: 110000
}


//7. Display the total revenue (price × quantity) generated per product.

db.sales.aggregate([
  { $lookup: {
      from: "products",
      localField: "product_id",
      foreignField: "product_id",
      as: "product"
    }
  },
  { $unwind: "$product" },
  { $group: {
      _id: "$product_id",
      name: { $first: "$product.name" },
      revenue: { $sum: { $multiply: ["$quantity", "$product.price"] } }
    }
  }
]);
{
  _id: 104,
  name: 'Desk',
  revenue: 7000
}
{
  _id: 103,
  name: 'Chair',
  revenue: 15000
}
{
  _id: 105,
  name: 'Book',
  revenue: 2500
}
{
  _id: 102,
  name: 'Mobile',
  revenue: 75000
}

//8. List customers who purchased more than 3 items in any sale

db.sales.find(
  { quantity: { $gt: 3 } },
  { _id: 0, customer: 1, quantity: 1, sale_id: 1 }
);
{
  sale_id: 3,
  quantity: 5,
  customer: 'Ravi'
}
{
  sale_id: 5,
  quantity: 10,
  customer: 'Meena'
}


//9. Sort products by stock in descending order.

db.products.find().sort({stock : -1});
{
  _id: ObjectId('687f5871c0680f15182ab2d5'),
  product_id: 105,
  name: 'Book',
  category: 'Stationery',
  price: 250,
  stock: 200
}
{
  _id: ObjectId('687f5871c0680f15182ab2d3'),
  product_id: 103,
  name: 'Chair',
  category: 'Furniture',
  price: 3000,
  stock: 100
}
{
  _id: ObjectId('687f5871c0680f15182ab2d2'),
  product_id: 102,
  name: 'Mobile',
  category: 'Electronics',
  price: 25000,
  stock: 50
}
{
  _id: ObjectId('687f5871c0680f15182ab2d4'),
  product_id: 104,
  name: 'Desk',
  category: 'Furniture',
  price: 7000,
  stock: 40
}
{
  _id: ObjectId('687f5871c0680f15182ab2d1'),
  product_id: 101,
  name: 'Laptop',
  category: 'Electronics',
  price: 55000,
  stock: 30
}

//10. Find the top 2 best-selling products based on quantity.

db.sales.aggregate([
  { $group: {
      _id: "$product_id",
      total_quantity: { $sum: "$quantity" }
    }
  },
  { $sort: { total_quantity: -1 } },
  { $limit: 2 },
  { $lookup: {
      from: "products",
      localField: "_id",
      foreignField: "product_id",
      as: "prod"
    }
  },
  { $unwind: "$prod" },
  { $project: {
      _id: 0,
      product_id: "$_id",
      name: "$prod.name",
      total_quantity: 1
    }
  }
]);
{
  total_quantity: 10,
  product_id: 105,
  name: 'Book'
}
{
  total_quantity: 5,
  product_id: 103,
  name: 'Chair'
}
RetailStoreInventory&SalesDB


