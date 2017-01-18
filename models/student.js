'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      getAllData: function(cb){
        this.findAll().then(function(data){
          cb(data)
      })
}
    },
    instanceMethods :{
      getFname: function(){
        return (this.first_name+" "+this.last_name)
      }
    }

  });
  return Student;
};
