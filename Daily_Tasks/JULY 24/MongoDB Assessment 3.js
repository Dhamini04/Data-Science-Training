/////////////////////      Job Portal  /////////////////////////////////////////////////


use JobPortalDB
switched to db JobPortalDB
db.jobs.insertMany([
  { job_id: 1, title: "Backend Developer", company: "TechNova", location: "Bangalore", salary: 1200000, job_type: "remote", posted_on: new Date("2025-07-10") },
  { job_id: 2, title: "Data Scientist", company: "InnoData", location: "Hyderabad", salary: 1500000, job_type: "hybrid", posted_on: new Date("2025-07-01") },
  { job_id: 3, title: "Frontend Developer", company: "Webify", location: "Pune", salary: 1000000, job_type: "on-site", posted_on: new Date("2025-06-01") },
  { job_id: 4, title: "DevOps Engineer", company: "CloudZone", location: "Remote", salary: 1300000, job_type: "remote", posted_on: new Date("2025-07-20") },
  { job_id: 5, title: "UI/UX Designer", company: "Webify", location: "Mumbai", salary: 900000, job_type: "on-site", posted_on: new Date("2025-06-15") }
]);
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('688205c747c4cbd59931c040'),
    '1': ObjectId('688205c747c4cbd59931c041'),
    '2': ObjectId('688205c747c4cbd59931c042'),
    '3': ObjectId('688205c747c4cbd59931c043'),
    '4': ObjectId('688205c747c4cbd59931c044')
  }
}
db.applicants.insertMany([
  { applicant_id: 1, name: "Anjali Rao", skills: ["JavaScript", "MongoDB"], experience: 3, city: "Hyderabad", applied_on: new Date("2025-07-15") },
  { applicant_id: 2, name: "Rohit Mehta", skills: ["Python", "SQL"], experience: 2, city: "Pune", applied_on: new Date("2025-07-12") },
  { applicant_id: 3, name: "Sneha Iyer", skills: ["HTML", "CSS", "JavaScript"], experience: 1, city: "Delhi", applied_on: new Date("2025-07-10") },
  { applicant_id: 4, name: "Aman Verma", skills: ["Java", "MongoDB", "Node.js"], experience: 4, city: "Hyderabad", applied_on: new Date("2025-07-18") },
  { applicant_id: 5, name: "Kavya Singh", skills: ["UI/UX", "Figma"], experience: 2, city: "Mumbai", applied_on: new Date("2025-07-14") }
])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('688205d147c4cbd59931c045'),
    '1': ObjectId('688205d147c4cbd59931c046'),
    '2': ObjectId('688205d147c4cbd59931c047'),
    '3': ObjectId('688205d147c4cbd59931c048'),
    '4': ObjectId('688205d147c4cbd59931c049')
  }
}
db.applications.insertMany([
  { application_id: 101, applicant_id: 1, job_id: 1, application_status: "interview scheduled", interview_scheduled: true, feedback: "positive" },
  { application_id: 102, applicant_id: 2, job_id: 2, application_status: "applied", interview_scheduled: false, feedback: "" },
  { application_id: 103, applicant_id: 3, job_id: 3, application_status: "interview scheduled", interview_scheduled: true, feedback: "pending" },
  { application_id: 104, applicant_id: 4, job_id: 1, application_status: "applied", interview_scheduled: false, feedback: "" },
  { application_id: 105, applicant_id: 1, job_id: 2, application_status: "applied", interview_scheduled: false, feedback: "" }
])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('688205f847c4cbd59931c04a'),
    '1': ObjectId('688205f847c4cbd59931c04b'),
    '2': ObjectId('688205f847c4cbd59931c04c'),
    '3': ObjectId('688205f847c4cbd59931c04d'),
    '4': ObjectId('688205f847c4cbd59931c04e')
  }
}

//1. Find all remote jobs with a salary greater than 􀀀10,00,000.

db.jobs.find({ job_type: "remote", salary: { $gt: 1000000 } })
{
  _id: ObjectId('688205c747c4cbd59931c040'),
  job_id: 1,
  title: 'Backend Developer',
  company: 'TechNova',
  location: 'Bangalore',
  salary: 1200000,
  job_type: 'remote',
  posted_on: 2025-07-10T00:00:00.000Z
}
{
  _id: ObjectId('688205c747c4cbd59931c043'),
  job_id: 4,
  title: 'DevOps Engineer',
  company: 'CloudZone',
  location: 'Remote',
  salary: 1300000,
  job_type: 'remote',
  posted_on: 2025-07-20T00:00:00.000Z
}

//2. Get all applicants who know MongoDB.

db.applicants.find({ skills: "MongoDB" })
{
  _id: ObjectId('688205d147c4cbd59931c045'),
  applicant_id: 1,
  name: 'Anjali Rao',
  skills: [
    'JavaScript',
    'MongoDB'
  ],
  experience: 3,
  city: 'Hyderabad',
  applied_on: 2025-07-15T00:00:00.000Z
}
{
  _id: ObjectId('688205d147c4cbd59931c048'),
  applicant_id: 4,
  name: 'Aman Verma',
  skills: [
    'Java',
    'MongoDB',
    'Node.js'
  ],
  experience: 4,
  city: 'Hyderabad',
  applied_on: 2025-07-18T00:00:00.000Z
}

//3. Show the number of jobs posted in the last 30 days.

db.jobs.find({
  posted_on: { $gte: new Date(new Date() - 30 * 24 * 60 * 60 * 1000) }
})
{
  _id: ObjectId('688205c747c4cbd59931c040'),
  job_id: 1,
  title: 'Backend Developer',
  company: 'TechNova',
  location: 'Bangalore',
  salary: 1200000,
  job_type: 'remote',
  posted_on: 2025-07-10T00:00:00.000Z
}
{
  _id: ObjectId('688205c747c4cbd59931c041'),
  job_id: 2,
  title: 'Data Scientist',
  company: 'InnoData',
  location: 'Hyderabad',
  salary: 1500000,
  job_type: 'hybrid',
  posted_on: 2025-07-01T00:00:00.000Z
}
{
  _id: ObjectId('688205c747c4cbd59931c043'),
  job_id: 4,
  title: 'DevOps Engineer',
  company: 'CloudZone',
  location: 'Remote',
  salary: 1300000,
  job_type: 'remote',
  posted_on: 2025-07-20T00:00:00.000Z
}

//4. List all job applications that are in ‘interview scheduled’ status.

db.applications.find({ application_status: "interview scheduled" })
{
  _id: ObjectId('688205f847c4cbd59931c04a'),
  application_id: 101,
  applicant_id: 1,
  job_id: 1,
  application_status: 'interview scheduled',
  interview_scheduled: true,
  feedback: 'positive'
}
{
  _id: ObjectId('688205f847c4cbd59931c04c'),
  application_id: 103,
  applicant_id: 3,
  job_id: 3,
  application_status: 'interview scheduled',
  interview_scheduled: true,
  feedback: 'pending'
}

//5. Find companies that have posted more than 2 jobs.

db.jobs.aggregate([
  { $group: { _id: "$company", jobCount: { $sum: 1 } } },
  { $match: { jobCount: { $gt: 2 } } }
])

//6. Join applications with jobs to show job title along with the applicant’sname.

db.applications.aggregate([
  {
    $lookup: {
      from: "jobs",
      localField: "job_id",
      foreignField: "job_id",
      as: "job_info"
    }
  },
  {
    $lookup: {
      from: "applicants",
      localField: "applicant_id",
      foreignField: "applicant_id",
      as: "applicant_info"
    }
  },
  {
    $project: {
      application_id: 1,
      job_title: { $arrayElemAt: ["$job_info.title", 0] },
      applicant_name: { $arrayElemAt: ["$applicant_info.name", 0] }
    }
  }
])
{
  _id: ObjectId('688205f847c4cbd59931c04a'),
  application_id: 101,
  job_title: 'Backend Developer',
  applicant_name: 'Anjali Rao'
}
{
  _id: ObjectId('688205f847c4cbd59931c04b'),
  application_id: 102,
  job_title: 'Data Scientist',
  applicant_name: 'Rohit Mehta'
}
{
  _id: ObjectId('688205f847c4cbd59931c04c'),
  application_id: 103,
  job_title: 'Frontend Developer',
  applicant_name: 'Sneha Iyer'
}
{
  _id: ObjectId('688205f847c4cbd59931c04d'),
  application_id: 104,
  job_title: 'Backend Developer',
  applicant_name: 'Aman Verma'
}
{
  _id: ObjectId('688205f847c4cbd59931c04e'),
  application_id: 105,
  job_title: 'Data Scientist',
  applicant_name: 'Anjali Rao'
}

//7. Find how many applications each job has received.

db.applications.aggregate([
  { $group: { _id: "$job_id", totalApplications: { $sum: 1 } } }
])
{
  _id: 1,
  totalApplications: 2
}
{
  _id: 3,
  totalApplications: 1
}
{
  _id: 2,
  totalApplications: 2
}


//8. List applicants who have applied for more than one job.

db.applications.aggregate([
  { $group: { _id: "$applicant_id", jobCount: { $sum: 1 } } },
  { $match: { jobCount: { $gt: 1 } } }
])
{
  _id: 1,
  jobCount: 2
}


//9. Show the top 3 cities with the most applicant

db.applicants.aggregate([
  { $group: { _id: "$city", total: { $sum: 1 } } },
  { $sort: { total: -1 } },
  { $limit: 3 }
])
{
  _id: 'Hyderabad',
  total: 2
}
{
  _id: 'Delhi',
  total: 1
}
{
  _id: 'Pune',
  total: 1
}


//10. Get the average salary for each job type (remote, hybrid, on-site)

db.jobs.aggregate([
  { $group: { _id: "$job_type", avgSalary: { $avg: "$salary" } } }
])
{
  _id: 'on-site',
  avgSalary: 950000
}
{
  _id: 'hybrid',
  avgSalary: 1500000
}
{
  _id: 'remote',
  avgSalary: 1250000
}

// 11. Update the status of one application to "offer made".

db.applications.updateOne(
  { application_id: 102 },
  { $set: { application_status: "offer made" } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
const jobIdsWithApps = db.applications.distinct("job_id");

//12. Delete a job that has not received any applications.

db.jobs.deleteMany({ job_id: { $nin: jobIdsWithApps } });
{
  acknowledged: true,
  deletedCount: 2
}

//13. Add a new field shortlisted to all applications and set it to false.

db.applications.updateMany({}, { $set: { shortlisted: false } })
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 5,
  modifiedCount: 5,
  upsertedCount: 0
}

//14. Increment experience of all applicants from "Hyderabad" by 1 year.

db.applicants.updateMany(
  { city: "Hyderabad" },
  { $inc: { experience: 1 } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 2,
  modifiedCount: 2,
  upsertedCount: 0
}
const appliedApplicantIds = db.applications.distinct("applicant_id");

// 15. Remove all applicants who haven’t applied to any job.


db.applicants.deleteMany({ applicant_id: { $nin: appliedApplicantIds } });
{
  acknowledged: true,
  deletedCount: 1
}
JobPortalDB

