'use strict'

const db = require('./models')

// db.Student.bulkCreate([{ first_name: 'wawa' ,last_name:'ww',birthdate:'1999-01-20'},
//                       { first_name: 'wewe' ,last_name:'wa',birthdate:'2000-02-25'},
//                       { first_name: 'awaw' ,last_name:'we',birthdate:'1998-01-27'},
//                       { first_name: 'asdsd' ,last_name:'www',birthdate:'1989-01-29'}]).
//                       then(function(student){
//                         console.log(student)
//                       })




db.Student.findAll().then(function(students){
    students.forEach(function(student){
    student.update({name : student.getFname()})
  })
})
