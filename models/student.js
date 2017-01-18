'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    birthday: DataTypes.DATE,
    email: {
      type: DataTypes.STRING,
      validate: {isEmail: {args: true, msg: "Email in wrong format"},
      isUniq: function(value, next){
        Student.findAll({where:{email:value}, attributes: ['id']}).then(function(data){
          if (data.length>0){ return next('Email address already in use!')}
            next();
          })
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {len: {args: [10,13], msg: "Phone length must between 10-13"}, isNumeric: {args: true, msg: "Number Only"}, isAlphanumeric: {args: false, msg: "No Special Character"}}
    },
    height: {
      type: DataTypes.INTEGER,
      validate: {min: {args: 150, msg: "Minimal Height Must Above 150"}}
    },
    fullname: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      getAllData: function(){
        Student.findAll().then(function(data){
          data.forEach(function(data){
            console.log(`id: ${data.dataValues.id}\nFullname: "${data.dataValues.fullname}"\nage: ${data.getAge()}\n`);
          })
        })
      }
    },
    instanceMethods: {
      getFullName: function(){
        return (`${this.firstName} ${this.lastName}`)
      },
      getAge: function(){
        var birthday = new Date(this.birthday);
        return Math.floor((Date.now() - birthday) / (31557600000));
      }
    }
  });
  return Student;
};
