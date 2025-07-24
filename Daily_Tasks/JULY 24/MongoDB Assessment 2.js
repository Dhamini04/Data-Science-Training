use LibraryManagementDB
switched to db LibraryManagementDB
db.books.insertMany([
{ book_id: 201, title: "The Alchemist", author: "Paulo Coelho", genre: "Fiction",
copies: 10 },
{ book_id: 202, title: "Atomic Habits", author: "James Clear", genre: "Self-Help",
copies: 5 },
{ book_id: 203, title: "Sapiens", author: "Yuval Noah Harari", genre: "History",
copies: 7 },
{ book_id: 204, title: "The Lean Startup", author: "Eric Ries", genre: "Business",
copies: 3 },
{ book_id: 205, title: "Deep Work", author: "Cal Newport", genre: "Productivity",
copies: 4 }
]);
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('6881ff96ba4d0cb789f44652'),
    '1': ObjectId('6881ff96ba4d0cb789f44653'),
    '2': ObjectId('6881ff96ba4d0cb789f44654'),
    '3': ObjectId('6881ff96ba4d0cb789f44655'),
    '4': ObjectId('6881ff96ba4d0cb789f44656')
  }
}
db.members.insertMany([
{ member_id: 101, name: "Ayesha Khan", joined_on: new Date("2024-01-15") },
{ member_id: 102, name: "Rahul Verma", joined_on: new Date("2024-03-12") },
{ member_id: 103, name: "Nikita Rao", joined_on: new Date("2024-04-10") }
]);
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('6881ffa4ba4d0cb789f44657'),
    '1': ObjectId('6881ffa4ba4d0cb789f44658'),
    '2': ObjectId('6881ffa4ba4d0cb789f44659')
  }
}
db.borrowed.insertMany([
{ borrow_id: 1, member_id: 101, book_id: 201, date: new Date("2024-06-01"),
returned: true },
{ borrow_id: 2, member_id: 101, book_id: 203, date: new Date("2024-06-15"),
returned: false },
{ borrow_id: 3, member_id: 102, book_id: 202, date: new Date("2024-06-20"),
returned: false },
{ borrow_id: 4, member_id: 103, book_id: 204, date: new Date("2024-06-22"),
returned: true }
]);
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('6881ffb1ba4d0cb789f4465a'),
    '1': ObjectId('6881ffb1ba4d0cb789f4465b'),
    '2': ObjectId('6881ffb1ba4d0cb789f4465c'),
    '3': ObjectId('6881ffb1ba4d0cb789f4465d')
  }
}
db.books.find({ genre: "Self-Help" });
{
  _id: ObjectId('6881ff96ba4d0cb789f44653'),
  book_id: 202,
  title: 'Atomic Habits',
  author: 'James Clear',
  genre: 'Self-Help',
  copies: 5
}
db.members.find({ joined_on: { $gt: new Date("2024-03-31") } });
{
  _id: ObjectId('6881ffa4ba4d0cb789f44659'),
  member_id: 103,
  name: 'Nikita Rao',
  joined_on: 2024-04-10T00:00:00.000Z
}
db.borrowed.find({ returned: false });
{
  _id: ObjectId('6881ffb1ba4d0cb789f4465b'),
  borrow_id: 2,
  member_id: 101,
  book_id: 203,
  date: 2024-06-15T00:00:00.000Z,
  returned: false
}
{
  _id: ObjectId('6881ffb1ba4d0cb789f4465c'),
  borrow_id: 3,
  member_id: 102,
  book_id: 202,
  date: 2024-06-20T00:00:00.000Z,
  returned: false
}
db.books.find({ copies: { $lt: 5 } });
{
  _id: ObjectId('6881ff96ba4d0cb789f44655'),
  book_id: 204,
  title: 'The Lean Startup',
  author: 'Eric Ries',
  genre: 'Business',
  copies: 3
}
{
  _id: ObjectId('6881ff96ba4d0cb789f44656'),
  book_id: 205,
  title: 'Deep Work',
  author: 'Cal Newport',
  genre: 'Productivity',
  copies: 4
}
db.books.find({ author: "Cal Newport" });
{
  _id: ObjectId('6881ff96ba4d0cb789f44656'),
  book_id: 205,
  title: 'Deep Work',
  author: 'Cal Newport',
  genre: 'Productivity',
  copies: 4
}
db.borrowed.aggregate([
  {
    $lookup: {
      from: "books",
      localField: "book_id",
      foreignField: "book_id",
      as: "book_info"
    }
  },
  {
    $lookup: {
      from: "members",
      localField: "member_id",
      foreignField: "member_id",
      as: "member_info"
    }
     },
  {
    $project: {
      borrow_id: 1,
      date: 1,
      returned: 1,
      "book_info.title": 1,
      "member_info.name": 1
    }
  }
]);
{
  _id: ObjectId('6881ffb1ba4d0cb789f4465a'),
  borrow_id: 1,
  date: 2024-06-01T00:00:00.000Z,
  returned: true,
  book_info: [
    {
      title: 'The Alchemist'
    }
  ],
  member_info: [
    {
      name: 'Ayesha Khan'
    }
  ]
}
{
  _id: ObjectId('6881ffb1ba4d0cb789f4465b'),
  borrow_id: 2,
  date: 2024-06-15T00:00:00.000Z,
  returned: false,
  book_info: [
    {
      title: 'Sapiens'
    }
  ],
  member_info: [
    {
      name: 'Ayesha Khan'
    }
  ]
}
{
  _id: ObjectId('6881ffb1ba4d0cb789f4465c'),
  borrow_id: 3,
  date: 2024-06-20T00:00:00.000Z,
  returned: false,
  book_info: [
    {
      title: 'Atomic Habits'
    }
  ],
  member_info: [
    {
      name: 'Rahul Verma'
    }
  ]
}
{
  _id: ObjectId('6881ffb1ba4d0cb789f4465d'),
  borrow_id: 4,
  date: 2024-06-22T00:00:00.000Z,
  returned: true,
  book_info: [
    {
      title: 'The Lean Startup'
    }
  ],
  member_info: [
    {
      name: 'Nikita Rao'
    }
  ]
}
db.borrowed.aggregate([
  {
    $lookup: {
      from: "books",
      localField: "book_id",
      foreignField: "book_id",
      as: "book"
    }
  },
  { $unwind: "$book" },
  { $match: { "book.title": "Sapiens" } },
  {
    $lookup: {
      from: "members",
      localField: "member_id",
      foreignField: "member_id",
      as: "member"
    }
  },
  { $unwind: "$member" },
  {
    $project: {
      _id: 0,
      member_name: "$member.name",
      book_title: "$book.title"
    }
  }
]);
{
  member_name: 'Ayesha Khan',
  book_title: 'Sapiens'
}
 
db.members.aggregate([
  {
    $lookup: {
      from: "borrowed",
      localField: "member_id",
      foreignField: "member_id",
      as: "borrowed_books"
    }
  }
]);
{
  _id: ObjectId('6881ffa4ba4d0cb789f44657'),
  member_id: 101,
  name: 'Ayesha Khan',
  joined_on: 2024-01-15T00:00:00.000Z,
  borrowed_books: [
    {
      _id: ObjectId('6881ffb1ba4d0cb789f4465a'),
      borrow_id: 1,
      member_id: 101,
      book_id: 201,
      date: 2024-06-01T00:00:00.000Z,
      returned: true
    },
    {
      _id: ObjectId('6881ffb1ba4d0cb789f4465b'),
      borrow_id: 2,
      member_id: 101,
      book_id: 203,
      date: 2024-06-15T00:00:00.000Z,
      returned: false
    }
  ]
}
{
  _id: ObjectId('6881ffa4ba4d0cb789f44658'),
  member_id: 102,
  name: 'Rahul Verma',
  joined_on: 2024-03-12T00:00:00.000Z,
  borrowed_books: [
    {
      _id: ObjectId('6881ffb1ba4d0cb789f4465c'),
      borrow_id: 3,
      member_id: 102,
      book_id: 202,
      date: 2024-06-20T00:00:00.000Z,
      returned: false
    }
  ]
}
{
  _id: ObjectId('6881ffa4ba4d0cb789f44659'),
  member_id: 103,
  name: 'Nikita Rao',
  joined_on: 2024-04-10T00:00:00.000Z,
  borrowed_books: [
    {
      _id: ObjectId('6881ffb1ba4d0cb789f4465d'),
      borrow_id: 4,
      member_id: 103,
      book_id: 204,
      date: 2024-06-22T00:00:00.000Z,
      returned: true
    }
  ]
}
db.borrowed.aggregate([
  { $match: { returned: false } },
  {
    $lookup: {
      from: "members",
      localField: "member_id",
      foreignField: "member_id",
      as: "member"
    }
  },
  { $unwind: "$member" },
  {
    $project: {
      _id: 0,
      member_name: "$member.name"
    }
  },
  { $group: { _id: "$member_name" } }
]);
{
  _id: 'Ayesha Khan'
}
{
  _id: 'Rahul Verma'
}
db.borrowed.aggregate([
  {
    $group: {
      _id: "$book_id",
      borrow_count: { $sum: 1 }
    }
  },
  {
    $lookup: {
      from: "books",
      localField: "_id",
      foreignField: "book_id",
      as: "book"
    }
  },
  { $unwind: "$book" },
  {
    $project: {
      book_title: "$book.title",
      borrow_count: 1
    }
  }
]);
{
  _id: 204,
  borrow_count: 1,
  book_title: 'The Lean Startup'
}
{
  _id: 202,
  borrow_count: 1,
  book_title: 'Atomic Habits'
}
{
  _id: 203,
  borrow_count: 1,
  book_title: 'Sapiens'
}
{
  _id: 201,
  borrow_count: 1,
  book_title: 'The Alchemist'
}
db.borrowed.aggregate([
  {
    $group: {
      _id: "$member_id",
      total_borrowed: { $sum: 1 }
    }
  },
  {
    $lookup: {
      from: "members",
      localField: "_id",
      foreignField: "member_id",
      as: "member"
    }
  },
  { $unwind: "$member" },
  {
    $project: {
      member_name: "$member.name",
      total_borrowed: 1
    }
  }
]);
{
  _id: 102,
  total_borrowed: 1,
  member_name: 'Rahul Verma'
}
{
  _id: 103,
  total_borrowed: 1,
  member_name: 'Nikita Rao'
}
{
  _id: 101,
  total_borrowed: 2,
  member_name: 'Ayesha Khan'
}
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      total_books: { $sum: "$copies" }
    }
  },
  { $sort: { total_books: -1 } },
  { $limit: 1 }
]);
{
  _id: 'Fiction',
  total_books: 10
}
db.borrowed.aggregate([
  {
    $group: {
      _id: "$book_id",
      borrow_count: { $sum: 1 }
    }
  },
  {
    $sort: { borrow_count: -1 }
  },
  { $limit: 2 },
  {
    $lookup: {
      from: "books",
      localField: "_id",
      foreignField: "book_id",
      as: "book"
    }
  },
  { $unwind: "$book" },
  {
    $project: {
      book_title: "$book.title",
      borrow_count: 1
    }
  }
]);
{
  _id: 202,
  borrow_count: 1,
  book_title: 'Atomic Habits'
}
{
  _id: 204,
  borrow_count: 1,
  book_title: 'The Lean Startup'
}
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      avg_copies: { $avg: "$copies" }
    }
  }
]);
{
  _id: 'Fiction',
  avg_copies: 10
}
{
  _id: 'History',
  avg_copies: 7
}
{
  _id: 'Productivity',
  avg_copies: 4
}
{
  _id: 'Business',
  avg_copies: 3
}
{
  _id: 'Self-Help',
  avg_copies: 5
}
db.borrowed.aggregate([
  { $match: { returned: false } },
  {
    $count: "currently_borrowed_books"
  }
]);
{
  currently_borrowed_books: 2
}
db.members.insertOne({
  member_id: 104,
  name: "Priya Sen",
  joined_on: new Date("2024-07-15")
});
{
  acknowledged: true,
  insertedId: ObjectId('68820121ba4d0cb789f4465e')
}
db.members.aggregate([
  {
    $lookup: {
      from: "borrowed",
      localField: "member_id",
      foreignField: "member_id",
      as: "borrows"
    }
  },
  { $match: { borrows: { $eq: [] } } }
]);
{
  _id: ObjectId('68820121ba4d0cb789f4465e'),
  member_id: 104,
  name: 'Priya Sen',
  joined_on: 2024-07-15T00:00:00.000Z,
  borrows: []
}
db.books.aggregate([
  {
    $lookup: {
      from: "borrowed",
      localField: "book_id",
      foreignField: "book_id",
      as: "borrows"
    }
  },
  { $match: { borrows: { $eq: [] } } }
]);
{
  _id: ObjectId('6881ff96ba4d0cb789f44656'),
  book_id: 205,
  title: 'Deep Work',
  author: 'Cal Newport',
  genre: 'Productivity',
  copies: 4,
  borrows: []
}
db.borrowed.aggregate([
  {
    $group: {
      _id: "$member_id",
      borrow_count: { $sum: 1 }
    }
  },
  { $match: { borrow_count: { $gt: 1 } } },
  {
    $lookup: {
      from: "members",
      localField: "_id",
      foreignField: "member_id",
      as: "member"
    }
  },
  { $unwind: "$member" },
  {
    $project: {
      member_name: "$member.name",
      borrow_count: 1
    }
  }
]);
{
  _id: 101,
  borrow_count: 2,
  member_name: 'Ayesha Khan'
}
db.borrowed.aggregate([
  {
    $group: {
      _id: { $month: "$date" },
      borrow_count: { $sum: 1 }
    }
  },
  {
    $project: {
      month: "$_id",
      borrow_count: 1,
      _id: 0
    }
  },
  { $sort: { month: 1 } }
]);
{
  borrow_count: 4,
  month: 6
}
db.borrowed.aggregate([
  {
    $lookup: {
      from: "books",
      localField: "book_id",
      foreignField: "book_id",
      as: "book"
    }
  },
  { $unwind: "$book" },
  { $match: { "book.copies": { $lt: 5 } } },
  {
    $project: {
      borrow_id: 1,
      book_title: "$book.title",
      copies_at_time: "$book.copies"
    }
  }
]);
{
  _id: ObjectId('6881ffb1ba4d0cb789f4465d'),
  borrow_id: 4,
  book_title: 'The Lean Startup',
  copies_at_time: 3
}
LibraryManagementDB

