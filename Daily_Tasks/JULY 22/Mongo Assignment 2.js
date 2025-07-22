use MovieStreamingDB
switched to db MovieStreamingDB


db.users.insertMany([
  { user_id: 1, name: "Amit", email: "amit@gmail.com", country: "India" },
  { user_id: 2, name: "Sarah", email: "sarah@yahoo.com", country: "USA" },
  { user_id: 3, name: "Liu", email: "liu@foxmail.com", country: "China" },
  { user_id: 4, name: "Carlos", email: "carlos@hotmail.com", country: "Mexico" },
  { user_id: 5, name: "Meena", email: "meena@gmail.com", country: "India" }
]);
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('687f2b8bddd6434f1e1580e7'),
    '1': ObjectId('687f2b8bddd6434f1e1580e8'),
    '2': ObjectId('687f2b8bddd6434f1e1580e9'),
    '3': ObjectId('687f2b8bddd6434f1e1580ea'),
    '4': ObjectId('687f2b8bddd6434f1e1580eb')
  }
}



db.movies.insertMany([
   { movie_id: 201, title: "Dream Beyond Code", genre: "Sci-Fi", release_year: 2022, duration: 120 },
  { movie_id: 202, title: "Silent Whispers", genre: "Drama", release_year: 2019, duration: 95 },
  { movie_id: 203, title: "Comedy Clash", genre: "Comedy", release_year: 2021, duration: 110 },
  { movie_id: 204, title: "The Hacker Inside", genre: "Thriller", release_year: 2023, duration: 130 },
  { movie_id: 205, title: "Nature Calls", genre: "Documentary", release_year: 2020, duration: 90 },
  { movie_id: 206, title: "Epic Journey", genre: "Adventure", release_year: 2023, duration: 140 }
]);
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('687f2bc1ddd6434f1e1580ec'),
    '1': ObjectId('687f2bc1ddd6434f1e1580ed'),
    '2': ObjectId('687f2bc1ddd6434f1e1580ee'),
    '3': ObjectId('687f2bc1ddd6434f1e1580ef'),
    '4': ObjectId('687f2bc1ddd6434f1e1580f0'),
    '5': ObjectId('687f2bc1ddd6434f1e1580f1')
  }
}



db.watch_history.insertMany([
  { watch_id: 301, user_id: 1, movie_id: 201, watched_on: ISODate("2023-01-10"), watch_time: 120 },
  { watch_id: 302, user_id: 1, movie_id: 202, watched_on: ISODate("2023-01-15"), watch_time: 90 },
  { watch_id: 303, user_id: 2, movie_id: 203, watched_on: ISODate("2023-02-01"), watch_time: 110 },
  { watch_id: 304, user_id: 2, movie_id: 204, watched_on: ISODate("2023-02-10"), watch_time: 130 },
  { watch_id: 305, user_id: 3, movie_id: 201, watched_on: ISODate("2023-03-05"), watch_time: 100 },
  { watch_id: 306, user_id: 3, movie_id: 201, watched_on: ISODate("2023-03-06"), watch_time: 110 },
  { watch_id: 307, user_id: 4, movie_id: 205, watched_on: ISODate("2023-04-01"), watch_time: 90 },
  { watch_id: 308, user_id: 5, movie_id: 206, watched_on: ISODate("2023-05-01"), watch_time: 140 }
]);
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('687f2bfaddd6434f1e1580f2'),
    '1': ObjectId('687f2bfaddd6434f1e1580f3'),
    '2': ObjectId('687f2bfaddd6434f1e1580f4'),
    '3': ObjectId('687f2bfaddd6434f1e1580f5'),
    '4': ObjectId('687f2bfaddd6434f1e1580f6'),
    '5': ObjectId('687f2bfaddd6434f1e1580f7'),
    '6': ObjectId('687f2bfaddd6434f1e1580f8'),
    '7': ObjectId('687f2bfaddd6434f1e1580f9')
  }
}



db.movies.find({duration: {$gt: 100}});
{
  _id: ObjectId('687f2bc1ddd6434f1e1580ec'),
  movie_id: 201,
  title: 'Dream Beyond Code',
  genre: 'Sci-Fi',
  release_year: 2022,
  duration: 120
}
{
  _id: ObjectId('687f2bc1ddd6434f1e1580ee'),
  movie_id: 203,
  title: 'Comedy Clash',
  genre: 'Comedy',
  release_year: 2021,
  duration: 110
}
{
  _id: ObjectId('687f2bc1ddd6434f1e1580ef'),
  movie_id: 204,
  title: 'The Hacker Inside',
  genre: 'Thriller',
  release_year: 2023,
  duration: 130
}
{
  _id: ObjectId('687f2bc1ddd6434f1e1580f1'),
  movie_id: 206,
  title: 'Epic Journey',
  genre: 'Adventure',
  release_year: 2023,
  duration: 140
}




db.users.find({country: "India"});
{
  _id: ObjectId('687f2b8bddd6434f1e1580e7'),
  user_id: 1,
  name: 'Amit',
  email: 'amit@gmail.com',
  country: 'India'
}
{
  _id: ObjectId('687f2b8bddd6434f1e1580eb'),
  user_id: 5,
  name: 'Meena',
  email: 'meena@gmail.com',
  country: 'India'
}




db.movies.find({release_year: {$gt:2020}});
{
  _id: ObjectId('687f2bc1ddd6434f1e1580ec'),
  movie_id: 201,
  title: 'Dream Beyond Code',
  genre: 'Sci-Fi',
  release_year: 2022,
  duration: 120
}
{
  _id: ObjectId('687f2bc1ddd6434f1e1580ee'),
  movie_id: 203,
  title: 'Comedy Clash',
  genre: 'Comedy',
  release_year: 2021,
  duration: 110
}
{
  _id: ObjectId('687f2bc1ddd6434f1e1580ef'),
  movie_id: 204,
  title: 'The Hacker Inside',
  genre: 'Thriller',
  release_year: 2023,
  duration: 130
}
{
  _id: ObjectId('687f2bc1ddd6434f1e1580f1'),
  movie_id: 206,
  title: 'Epic Journey',
  genre: 'Adventure',
  release_year: 2023,
  duration: 140
}




db.watch_history.aggregate([
  {
    $lookup:{
    from: 'users',
    localField:"user_id" ,
    foreignField:"user_id",
    as: "user"
    }
  },
  {$unwind: "$user"},
  {
    $lookup:{
      from:"movies",
      localField:"movie_id",
      foreignField:"movie_id",
      as:"movie"
    }
  },
  {$unwind: "$movie"},
  {
    $project:{
      _id:0,
      user_name: "$user.name",
      movie_title: "$movie.title",
      watch_time:1
    }
  }
]);
{
  watch_time: 120,
  user_name: 'Amit',
  movie_title: 'Dream Beyond Code'
}
{
  watch_time: 90,
  user_name: 'Amit',
  movie_title: 'Silent Whispers'
}
{
  watch_time: 110,
  user_name: 'Sarah',
  movie_title: 'Comedy Clash'
}
{
  watch_time: 130,
  user_name: 'Sarah',
  movie_title: 'The Hacker Inside'
}
{
  watch_time: 100,
  user_name: 'Liu',
  movie_title: 'Dream Beyond Code'
}
{
  watch_time: 110,
  user_name: 'Liu',
  movie_title: 'Dream Beyond Code'
}
{
  watch_time: 90,
  user_name: 'Carlos',
  movie_title: 'Nature Calls'
}
{
  watch_time: 140,
  user_name: 'Meena',
  movie_title: 'Epic Journey'
}





db.watch_history.aggregate([
  {
    $lookup:{
      from: "movies",
      localField:"movie_id",
      foreignField:"movie_id",
      as:"movie"
    }
  },
  {$unwind: "$movie"},
  {
    $group: {
      _id: "$movie.genre",
      watch_count: {$sum:1}
    }
    
  }
]);
{
  _id: 'Sci-Fi',
  watch_count: 3
}
{
  _id: 'Drama',
  watch_count: 1
}
{
  _id: 'Comedy',
  watch_count: 1
}
{
  _id: 'Documentary',
  watch_count: 1
}
{
  _id: 'Adventure',
  watch_count: 1
}
{
  _id: 'Thriller',
  watch_count: 1
}





db.watch_history.aggregate([
  {
    $group: {
      _id: "$user_id",
      total_watch_time: {$sum:"$watch_time"}
    }
  }
]);
{
  _id: 3,
  total_watch_time: 210
}
{
  _id: 4,
  total_watch_time: 90
}
{
  _id: 2,
  total_watch_time: 240
}
{
  _id: 5,
  total_watch_time: 140
}
{
  _id: 1,
  total_watch_time: 210
}







   

db.watch_history.aggregate([
  {
    $group:{
      _id:{user_id:"$user_id", movie_id: "$movie_id"},
      watch_count:{$sum:1}
    }
  },
  {
    $match:{watch_count: {$gt: 1}}
  }
]);
{
  _id: {
    user_id: 3,
    movie_id: 201
  },
  watch_count: 2
}





db.watch_history.aggregate([
  {
    $lookup: {
      from: "movies",
      localField: "movie_id",
      foreignField: "movie_id",
      as: "movie"
    }
  },
  { $unwind: "$movie" },
  {
    $project: {
      user_id: 1,
      movie_id: 1,
      percentage_watched: {
        $multiply: [
          { $divide: ["$watch_time", "$movie.duration"] },
          100
        ]
      }
    }
  }
]);
{
  _id: ObjectId('687f2bfaddd6434f1e1580f2'),
  user_id: 1,
  movie_id: 201,
  percentage_watched: 100
}
{
  _id: ObjectId('687f2bfaddd6434f1e1580f3'),
  user_id: 1,
  movie_id: 202,
  percentage_watched: 94.73684210526315
}
{
  _id: ObjectId('687f2bfaddd6434f1e1580f4'),
  user_id: 2,
  movie_id: 203,
  percentage_watched: 100
}
{
  _id: ObjectId('687f2bfaddd6434f1e1580f5'),
  user_id: 2,
  movie_id: 204,
  percentage_watched: 100
}
{
  _id: ObjectId('687f2bfaddd6434f1e1580f6'),
  user_id: 3,
  movie_id: 201,
  percentage_watched: 83.33333333333334
}
{
  _id: ObjectId('687f2bfaddd6434f1e1580f7'),
  user_id: 3,
  movie_id: 201,
  percentage_watched: 91.66666666666666
}
{
  _id: ObjectId('687f2bfaddd6434f1e1580f8'),
  user_id: 4,
  movie_id: 205,
  percentage_watched: 100
}
{
  _id: ObjectId('687f2bfaddd6434f1e1580f9'),
  user_id: 5,
  movie_id: 206,
  percentage_watched: 100
}
MovieStreamingDB
Selection deleted

