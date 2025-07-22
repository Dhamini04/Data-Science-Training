//MongoDB Assignment: Fitness Center Database
//Step 1: Create Collections and Insert Data

use FitnessCenterDB
switched to db FitnessCenterDB


/*members
db.members.insertMany([
{ member_id: 1, name: "Anjali Rao", age: 28, gender: "Female", city: "Mumbai",
membership_type: "Gold" },
{ member_id: 2, name: "Rohan Mehta", age: 35, gender: "Male", city: "Delhi",
membership_type: "Silver" },
{ member_id: 3, name: "Fatima Shaikh", age: 22, gender: "Female", city: "Hyderabad",
membership_type: "Platinum" },
{ member_id: 4, name: "Vikram Das", age: 41, gender: "Male", city: "Bangalore",
membership_type: "Gold" },
{ member_id: 5, name: "Neha Kapoor", age: 31, gender: "Female", city: "Pune",
membership_type: "Silver" }
])*/

db.members.insertMany([
{ member_id: 1, name: "Anjali Rao", age: 28, gender: "Female", city: "Mumbai",
membership_type: "Gold" },
{ member_id: 2, name: "Rohan Mehta", age: 35, gender: "Male", city: "Delhi",
membership_type: "Silver" },
{ member_id: 3, name: "Fatima Shaikh", age: 22, gender: "Female", city: "Hyderabad",
membership_type: "Platinum" },
{ member_id: 4, name: "Vikram Das", age: 41, gender: "Male", city: "Bangalore",
membership_type: "Gold" },
{ member_id: 5, name: "Neha Kapoor", age: 31, gender: "Female", city: "Pune",
membership_type: "Silver" }
]);
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('687f68b35dabfa37b04571ba'),
    '1': ObjectId('687f68b35dabfa37b04571bb'),
    '2': ObjectId('687f68b35dabfa37b04571bc'),
    '3': ObjectId('687f68b35dabfa37b04571bd'),
    '4': ObjectId('687f68b35dabfa37b04571be')
  }
}

/*
trainers
db.trainers.insertMany([
{ trainer_id: 101, name: "Ajay Kumar", specialty: "Weight Training", experience: 7
},
{ trainer_id: 102, name: "Swati Nair", specialty: "Cardio", experience: 5 },
{ trainer_id: 103, name: "Imran Qureshi", specialty: "Yoga", experience: 8 }
])
*/

db.trainers.insertMany([
{ trainer_id: 101, name: "Ajay Kumar", specialty: "Weight Training", experience: 7
},
{ trainer_id: 102, name: "Swati Nair", specialty: "Cardio", experience: 5 },
{ trainer_id: 103, name: "Imran Qureshi", specialty: "Yoga", experience: 8 }
]);
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('687f68bd5dabfa37b04571bf'),
    '1': ObjectId('687f68bd5dabfa37b04571c0'),
    '2': ObjectId('687f68bd5dabfa37b04571c1')
  }
}

/*
sessions
db.sessions.insertMany([
{ session_id: 201, member_id: 1, trainer_id: 101, session_type: "Strength",
duration: 60, date: new Date("2024-08-01") },
{ session_id: 202, member_id: 2, trainer_id: 102, session_type: "Cardio", duration:
45, date: new Date("2024-08-02") },
{ session_id: 203, member_id: 3, trainer_id: 103, session_type: "Yoga", duration:
90, date: new Date("2024-08-03") },
{ session_id: 204, member_id: 1, trainer_id: 102, session_type: "Cardio", duration:
30, date: new Date("2024-08-04") },
{ session_id: 205, member_id: 4, trainer_id: 101, session_type: "Strength",
duration: 75, date: new Date("2024-08-05") },
{ session_id: 206, member_id: 5, trainer_id: 103, session_type: "Yoga", duration:
60, date: new Date("2024-08-05") }
])
*/
db.sessions.insertMany([
{ session_id: 201, member_id: 1, trainer_id: 101, session_type: "Strength",
duration: 60, date: new Date("2024-08-01") },
{ session_id: 202, member_id: 2, trainer_id: 102, session_type: "Cardio", duration:
45, date: new Date("2024-08-02") },
{ session_id: 203, member_id: 3, trainer_id: 103, session_type: "Yoga", duration:
90, date: new Date("2024-08-03") },
{ session_id: 204, member_id: 1, trainer_id: 102, session_type: "Cardio", duration:
30, date: new Date("2024-08-04") },
{ session_id: 205, member_id: 4, trainer_id: 101, session_type: "Strength",
duration: 75, date: new Date("2024-08-05") },
{ session_id: 206, member_id: 5, trainer_id: 103, session_type: "Yoga", duration:
60, date: new Date("2024-08-05") }
]);
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('687f68c75dabfa37b04571c2'),
    '1': ObjectId('687f68c75dabfa37b04571c3'),
    '2': ObjectId('687f68c75dabfa37b04571c4'),
    '3': ObjectId('687f68c75dabfa37b04571c5'),
    '4': ObjectId('687f68c75dabfa37b04571c6'),
    '5': ObjectId('687f68c75dabfa37b04571c7')
  }
}

//Step 2: Long List of Query Challenges
//Basic Queries
//1. Find all members from Mumbai.

db.members.find({ city: "Mumbai" });
{
  _id: ObjectId('687f68b35dabfa37b04571ba'),
  member_id: 1,
  name: 'Anjali Rao',
  age: 28,
  gender: 'Female',
  city: 'Mumbai',
  membership_type: 'Gold'
}

//2. List all trainers with experience greater than 6 years.

db.trainers.find({ experience: { $gt: 6 } });
{
  _id: ObjectId('687f68bd5dabfa37b04571bf'),
  trainer_id: 101,
  name: 'Ajay Kumar',
  specialty: 'Weight Training',
  experience: 7
}
{
  _id: ObjectId('687f68bd5dabfa37b04571c1'),
  trainer_id: 103,
  name: 'Imran Qureshi',
  specialty: 'Yoga',
  experience: 8
}

//3. Get all Yoga sessions.

db.sessions.find({ session_type: "Yoga" });
{
  _id: ObjectId('687f68c75dabfa37b04571c4'),
  session_id: 203,
  member_id: 3,
  trainer_id: 103,
  session_type: 'Yoga',
  duration: 90,
  date: 2024-08-03T00:00:00.000Z
}
{
  _id: ObjectId('687f68c75dabfa37b04571c7'),
  session_id: 206,
  member_id: 5,
  trainer_id: 103,
  session_type: 'Yoga',
  duration: 60,
  date: 2024-08-05T00:00:00.000Z
}

// 4. Show all sessions conducted by trainer Swati Nair.

db.sessions.aggregate([
  { $lookup: {
      from: "trainers",
      localField: "trainer_id",
      foreignField: "trainer_id",
      as: "trainer"
  }},
  { $unwind: "$trainer" },
  { $match: { "trainer.name": "Swati Nair" } }
]);
{
  _id: ObjectId('687f68c75dabfa37b04571c3'),
  session_id: 202,
  member_id: 2,
  trainer_id: 102,
  session_type: 'Cardio',
  duration: 45,
  date: 2024-08-02T00:00:00.000Z,
  trainer: {
    _id: ObjectId('687f68bd5dabfa37b04571c0'),
    trainer_id: 102,
    name: 'Swati Nair',
    specialty: 'Cardio',
    experience: 5
  }
}
{
  _id: ObjectId('687f68c75dabfa37b04571c5'),
  session_id: 204,
  member_id: 1,
  trainer_id: 102,
  session_type: 'Cardio',
  duration: 30,
  date: 2024-08-04T00:00:00.000Z,
  trainer: {
    _id: ObjectId('687f68bd5dabfa37b04571c0'),
    trainer_id: 102,
    name: 'Swati Nair',
    specialty: 'Cardio',
    experience: 5
  }
}

//5. Find all members who attended a session on 2024-08-05.

db.sessions.find({ date: ISODate("2024-08-05") })
  .forEach(s => print(s.member_id));
4
5


//Intermediate Queries
//6. Count the number of sessions each member has attended.*/

db.sessions.aggregate([
  { $group: {
      _id: "$member_id",
      session_count: { $sum: 1 }
  }}
]);
{
  _id: 1,
  session_count: 2
}
{
  _id: 5,
  session_count: 1
}
{
  _id: 2,
  session_count: 1
}
{
  _id: 4,
  session_count: 1
}
{
  _id: 3,
  session_count: 1
}


//7. Show average duration by session_type

db.sessions.aggregate([
  { $group: {
      _id: "$session_type",
      avg_duration: { $avg: "$duration" }
  }}
]);
{
  _id: 'Strength',
  avg_duration: 67.5
}
{
  _id: 'Yoga',
  avg_duration: 75
}
{
  _id: 'Cardio',
  avg_duration: 37.5
}


//8. Find all female members who attended a session longer than 60 minutes.

db.sessions.aggregate([
  { $match: { duration: { $gt: 60 } } },
  { $lookup: {
      from: "members",
      localField: "member_id",
      foreignField: "member_id",
      as: "member"
  }},
  { $unwind: "$member" },
  { $match: { "member.gender": "Female" } }
]);
{
  _id: ObjectId('687f68c75dabfa37b04571c4'),
  session_id: 203,
  member_id: 3,
  trainer_id: 103,
  session_type: 'Yoga',
  duration: 90,
  date: 2024-08-03T00:00:00.000Z,
  member: {
    _id: ObjectId('687f68b35dabfa37b04571bc'),
    member_id: 3,
    name: 'Fatima Shaikh',
    age: 22,
    gender: 'Female',
    city: 'Hyderabad',
    membership_type: 'Platinum'
  }
}


//9. Display sessions sorted by duration (descending).

db.sessions.find().sort({ duration: -1 });
{
  _id: ObjectId('687f68c75dabfa37b04571c4'),
  session_id: 203,
  member_id: 3,
  trainer_id: 103,
  session_type: 'Yoga',
  duration: 90,
  date: 2024-08-03T00:00:00.000Z
}
{
  _id: ObjectId('687f68c75dabfa37b04571c6'),
  session_id: 205,
  member_id: 4,
  trainer_id: 101,
  session_type: 'Strength',
  duration: 75,
  date: 2024-08-05T00:00:00.000Z
}
{
  _id: ObjectId('687f68c75dabfa37b04571c2'),
  session_id: 201,
  member_id: 1,
  trainer_id: 101,
  session_type: 'Strength',
  duration: 60,
  date: 2024-08-01T00:00:00.000Z
}
{
  _id: ObjectId('687f68c75dabfa37b04571c7'),
  session_id: 206,
  member_id: 5,
  trainer_id: 103,
  session_type: 'Yoga',
  duration: 60,
  date: 2024-08-05T00:00:00.000Z
}
{
  _id: ObjectId('687f68c75dabfa37b04571c3'),
  session_id: 202,
  member_id: 2,
  trainer_id: 102,
  session_type: 'Cardio',
  duration: 45,
  date: 2024-08-02T00:00:00.000Z
}
{
  _id: ObjectId('687f68c75dabfa37b04571c5'),
  session_id: 204,
  member_id: 1,
  trainer_id: 102,
  session_type: 'Cardio',
  duration: 30,
  date: 2024-08-04T00:00:00.000Z
}


//10. Find members who have attended sessions with more than one trainer.

db.sessions.aggregate([
  { $group: {
      _id: "$member_id",
      trainersSet: { $addToSet: "$trainer_id" }
  }},
  { $project: {
      trainer_count: { $size: "$trainersSet" }
  }},
  { $match: { trainer_count: { $gt: 1 } } }
]);
{
  _id: 1,
  trainer_count: 2
}


/* Advanced Queries with Aggregation & Lookup
//11. Use $lookup to display sessions with member name and trainer name.*/

db.sessions.aggregate([
  { $lookup: {
      from: "members",
      localField: "member_id",
      foreignField: "member_id",
      as: "member"
  }},
  { $unwind: "$member" },
  { $lookup: {
      from: "trainers",
      localField: "trainer_id",
      foreignField: "trainer_id",
      as: "trainer"
  }},
  { $unwind: "$trainer" },
  { $project: {
      session_id: 1,
      date: 1,
      session_type: 1,
      member_name: "$member.name",
      trainer_name: "$trainer.name"
  }}
]);
{
  _id: ObjectId('687f68c75dabfa37b04571c2'),
  session_id: 201,
  session_type: 'Strength',
  date: 2024-08-01T00:00:00.000Z,
  member_name: 'Anjali Rao',
  trainer_name: 'Ajay Kumar'
}
{
  _id: ObjectId('687f68c75dabfa37b04571c3'),
  session_id: 202,
  session_type: 'Cardio',
  date: 2024-08-02T00:00:00.000Z,
  member_name: 'Rohan Mehta',
  trainer_name: 'Swati Nair'
}
{
  _id: ObjectId('687f68c75dabfa37b04571c4'),
  session_id: 203,
  session_type: 'Yoga',
  date: 2024-08-03T00:00:00.000Z,
  member_name: 'Fatima Shaikh',
  trainer_name: 'Imran Qureshi'
}
{
  _id: ObjectId('687f68c75dabfa37b04571c5'),
  session_id: 204,
  session_type: 'Cardio',
  date: 2024-08-04T00:00:00.000Z,
  member_name: 'Anjali Rao',
  trainer_name: 'Swati Nair'
}
{
  _id: ObjectId('687f68c75dabfa37b04571c6'),
  session_id: 205,
  session_type: 'Strength',
  date: 2024-08-05T00:00:00.000Z,
  member_name: 'Vikram Das',
  trainer_name: 'Ajay Kumar'
}
{
  _id: ObjectId('687f68c75dabfa37b04571c7'),
  session_id: 206,
  session_type: 'Yoga',
  date: 2024-08-05T00:00:00.000Z,
  member_name: 'Neha Kapoor',
  trainer_name: 'Imran Qureshi'
}


//12. Calculate total session time per trainer
db.sessions.aggregate([
  { $group: {
      _id: "$trainer_id",
      total_time: { $sum: "$duration" }
  }}
]);
{
  _id: 101,
  total_time: 135
}
{
  _id: 103,
  total_time: 150
}
{
  _id: 102,
  total_time: 75
}

//13. List total time spent per member.

db.sessions.aggregate([
  { $group: {
      _id: "$member_id",
      total_time: { $sum: "$duration" }
  }}
]);
{
  _id: 4,
  total_time: 75
}
{
  _id: 5,
  total_time: 60
}
{
  _id: 1,
  total_time: 90
}
{
  _id: 3,
  total_time: 90
}
{
  _id: 2,
  total_time: 45
}

//14. Count sessions per trainer

db.sessions.aggregate([
  { $group: {
      _id: "$trainer_id",
      session_count: { $sum: 1 }
  }}
]);
{
  _id: 102,
  session_count: 2
}
{
  _id: 103,
  session_count: 2
}
{
  _id: 101,
  session_count: 2
}

//15. Trainer with longest average session duration

db.sessions.aggregate([
  { $group: {
      _id: "$trainer_id",
      avg_duration: { $avg: "$duration" }
  }},
  { $sort: { avg_duration: -1 } },
  { $limit: 1 }
]);
{
  _id: 103,
  avg_duration: 75
}

//16. Unique members per trainer

db.sessions.aggregate([
  { $group: {
      _id: "$trainer_id",
      members: { $addToSet: "$member_id" }
  }},
  { $project: {
      member_count: { $size: "$members" }
  }}
]);
{
  _id: 102,
  member_count: 2
}
{
  _id: 103,
  member_count: 2
}
{
  _id: 101,
  member_count: 2
}

//17. Find most active member by total duration

db.sessions.aggregate([
  { $group: {
      _id: "$member_id",
      total_time: { $sum: "$duration" }
  }},
  { $sort: { total_time: -1 } },
  { $limit: 1 }
]);
{
  _id: 3,
  total_time: 90
}

//18. List all Gold membership members who took at least one Strength session.

db.sessions.aggregate([
  { $match: { session_type: "Strength" } },
  { $lookup: {
      from: "members",
      localField: "member_id",
      foreignField: "member_id",
      as: "member"
  }},
  { $unwind: "$member" },
  { $match: { "member.membership_type": "Gold" } },
  { $project: { member_id: 1, "member.name": 1, session_id: 1 }}
]);
{
  _id: ObjectId('687f68c75dabfa37b04571c2'),
  session_id: 201,
  member_id: 1,
  member: {
    name: 'Anjali Rao'
  }
}
{
  _id: ObjectId('687f68c75dabfa37b04571c6'),
  session_id: 205,
  member_id: 4,
  member: {
    name: 'Vikram Das'
  }
}

//19. Display a breakdown of sessions by membership type. 

db.sessions.aggregate([
  { $lookup: {
      from: "members",
      localField: "member_id",
      foreignField: "member_id",
      as: "member"
  }},
  { $unwind: "$member" },
  { $group: {
      _id: "$member.membership_type",
      session_count: { $sum: 1 }
  }}
]);
{
  _id: 'Gold',
  session_count: 3
}
{
  _id: 'Silver',
  session_count: 2
}
{
  _id: 'Platinum',
  session_count: 1
}

//20. Find members who have not attended any session yet (hint: simulate later byadding a new member).

db.members.insertOne({
  member_id: 6, name: "Samir Patel",
  age: 29, gender: "Male", city: "Ahmedabad",
  membership_type: "Silver"
});
{
  acknowledged: true,
  insertedId: ObjectId('687f6b085dabfa37b04571c8')
}
db.members.aggregate([
  { $lookup: {
      from: "sessions",
      localField: "member_id",
      foreignField: "member_id",
      as: "attendances"
  }},
  { $match: { attendances: { $size: 0 } } },
  { $project: { member_id: 1, name: 1 }}
]);
{
  _id: ObjectId('687f6b085dabfa37b04571c8'),
  member_id: 6,
  name: 'Samir Patel'
}
FitnessCenterDB


