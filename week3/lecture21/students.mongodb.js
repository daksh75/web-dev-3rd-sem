use("collegeDB")


//create
// db.createCollection("students")

// db.students.insertOne(
//     {rollNo:1,name:"Ansh",Section:"A",Marks:9.8}
// )

// db.students.insertMany([
//     {rollNo:1,name:"mayank",Section:"A",Marks:9.8},
//     {rollNo:1,name:"daksh",Section:"A",Marks:9.8},
//     {rollNo:1,name:"bansal",Section:"A",Marks:9.8}
// ])

// db.students.insert([
//     {rollNo:6,name:"Ansh",Section:"A",Marks:9.8},
//     {rollNo:7,name:"alex",Section:"A",Marks:9.8},
//     {rollNo:8,name:"jeet",Section:"A",Marks:9.8}
// ])

//read
// db.students.findOne() //it returns first one document
// db.students.find() //return all document from the collection
// db.students.find({rollNo:1}) //return only those document who have rollno 1


//update
db.students.updateOne({name:"daksh"},{$set:{marks:30}})