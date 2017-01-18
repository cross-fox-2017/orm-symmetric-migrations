'use strict';
module.exports = function(sequelize, DataTypes) {
  var student = sequelize.define('student', {
    // first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    name:DataTypes.STRING,
    birthdate: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      getAllData : function(callBack){
        student.findAll().then(function(data){
          callBack(data)
        })
      }
    },
    instanceMethods: {
      getFullName: function() {
        return (this.first_name + " " + this.last_name)
      },
      getAge: function(){
        let today = new Date();
        let age = today.getFullYear() - this.birthdate.getFullYear();
        let m = today.getMonth() - this.birthdate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < this.birthdate.getDate())) {
          age--;
        }
        return age;
      }
    }
  });
  return student;
};
