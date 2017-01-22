'use strict'

const db = require("./models")

// add data:
// db.Student.create({ first_name: 'Karina', last_name: 'ningsih', birthdate: '1989-02-07'})
// .then(function(data) {
//   console.log("Success record data")
// })

// db.Student.create({name:'Isumi Karinaningsih', address:'Jl. Nirwana Tingkat 7'}).then(function(data) {
//   console.log("Success record data", data);
// })

// db.Student.create({
//   name:'Aurora', address:'Kolong Langit No. 1'
// }).then(function(data) {
//   console.log("Success record data", data);
// })
//
db.Student.findAll().then(function(data){
  data.forEach(function(data){
    data.update({
      name: data.getFullName()
    })
  })
})

// //Contoh data (email, height, phone) yang valid:
// db.Student.create({
//   first_name:'isumi', last_name:'zumi', birthdate:'1989-02-07', email:'isumizumi@gmail.com', height:160, phone:'081234567890'
// }).then(function(data) {
//   console.log("Success record data", data);
// })

//Contoh data (email, height, phone) yang tidak valid:
// db.Student.create({
//   first_name:'karina', last_name:'isumi', birthdate:'1989-01-01', email:'isumi_karina@yahoo.co.id', height:100, phone:'081234567'
// }).then(function(data) {
//   console.log("Success record data", data);
// })

// db.Student.getAllData()
// var all = db.Student.getAllData(function(students){
//   students.forEach(function(student) {
//     console.log("ID: "+student.id)
//     console.log("First Name: "+student.first_name)
//     console.log("Last Name: "+student.last_name)
//     console.log("Full Name: "+student.full_name)
//     console.log("Age: "+student.age)
//   })
// })
