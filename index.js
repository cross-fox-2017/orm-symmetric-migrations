'use strict'

const models = require('./models')


models.Student.create({
    first_name: "23Tedd",
    last_name: "23DEE",
    bio: "Senang"
})

// models.Student.findAll().then(function(tmpData) {
//     tmpData.forEach(function(item) {
//         item.name = `${item.first_name} ${item.last_name}`
//         console.log(item.name);
//         item.save().then(function(){})
//     })
// })
