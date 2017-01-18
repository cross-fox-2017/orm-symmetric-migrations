"use strict"
var db  = require("./models")

//Delete rows in DB
// db.student.destroy({
//   where:{
//     id:2
//   }
// })

//INSERT 1 VALUE
db.student.create({
  first_name:"Eri", last_name:"Irawan", birthdate:"1991-02-11"
}).then(function(data){
  console.log("Adding Data", data)
});

//View get fullname
// db.student.findById(1).then(function(student){
//   console.log(student.getFullName());
// });//End get fullname
//
// //View getAge
// db.student.findById(1).then(function(student){
//   console.log(student.getAge());
// });//End getAge

//View all data
db.student.getAllData(function(students){
  students.forEach(function(student){
    console.log("ID        : " + student.id);
    console.log("Firs Name : " + student.first_name);
    console.log("Last Name : " + student.last_name);
    console.log("Age       : " + student.getAge());
    // console.log("Full Name : " + student.getFullName());
  })
})
