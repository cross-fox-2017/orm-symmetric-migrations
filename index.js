'use strict'

const db = require('./models')

// db.Student.bulkCreate([{ first_name: 'foo' ,last_name:'bar',birthdate:'1999-01-20'},
//                       { first_name: 'fii' ,last_name:'baron',birthdate:'2000-02-25'},
//                       { first_name: 'fix' ,last_name:'bor',birthdate:'1998-01-27'},
//                       { first_name: 'flex' ,last_name:'barus',birthdate:'1989-01-29'}]).
//                       then(function(student){
//                         console.log(student)
//                       })




db.Student.findAll().then(function(students){
    students.forEach(function(student){
    student.update({name : student.getFname()})
  })
})
