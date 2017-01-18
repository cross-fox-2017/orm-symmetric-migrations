'use strict'
const db = require('./models');

// db.Student.bulkCreate([
//   {first_name: 'Muhammad', last_name: 'Iqbal'},
//   {first_name: 'Yoma', last_name: 'Sofwan'},
//   {first_name: 'Irwin', last_name: 'Pratajaya'},
//   {first_name: 'Eri', last_name: 'Irawan'}
// ]).then(function() {
//   console.log('DATA ADDED')
// })

db.Student.findAll().then(function(students){
  students.forEach(function(students){
    students.update({name: students.getFullName()})
  })
})
