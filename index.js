"use strict"

const db = require('./models')

db.Student.findAll().then(function(data){
  data.forEach(function(data){
    data.update({
      name: data.getFullName()
    })
  })
})
