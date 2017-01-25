'use strict'

const db = require('./models');

db.Student.bulkCreate([
  {name: 'Irwin Pratajaya', address: 'Bintaro'},
  {name: 'Muhammad Iqbal', address: 'Bandung'},
  {name: 'Endy Santoso', address: 'BSD'},
  {name: 'Mangku Widodo', address: 'Tangerang'}
]).then(function() {
  console.log('DATA ADDED')
})
