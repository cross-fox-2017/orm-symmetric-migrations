'use strict'

const db = require('./models')

// db.Student.bulkCreate(
//   [
//   {first_name: 'John', last_name: 'Doe'},
//   {first_name: 'Jane', last_name: 'Smith'}
//   ])
// .then(function(students) {
//   console.log('student(s) added');
// })

// db.Student.findAll().then(function(students){
//   students.forEach(function(students){
//     students.update({name: students.getFullName()})
//   })
// })


db.Student.findAll().then(function(students){
  students.forEach(function(students){
    students.update({address: 'San Antonio'})
  })
})
