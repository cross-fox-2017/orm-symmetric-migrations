'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    address: DataTypes.TEXT,
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    instanceMethods: {
      getFullName: function() {
        return `${this.first_name} ${this.last_name}`
      }
    }
  });
  return Student;
};
