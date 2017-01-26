'use strict'

const db = require('./models')

// db.Student.bulkCreate([{ firstname: 'wawa' ,lastname:'ww',birthdate:'1999-01-20'},
//                       { firstname: 'wewe' ,lastname:'wa',birthdate:'2000-02-25'},
//                       { firstname: 'awaw' ,lastname:'we',birthdate:'1998-01-27'},
//                       { firstname: 'asdsd' ,lastname:'www',birthdate:'1989-01-29'}]).
//                       then(function(student){
//                         console.log(student)
//                       })




db.Student.findAll().then(function(students){
    students.forEach(function(student){
    student.update({name : student.getFname()})
  })
})
