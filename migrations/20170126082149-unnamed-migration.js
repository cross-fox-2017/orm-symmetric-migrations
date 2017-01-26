
'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.removeColumn(
      'Students',
      'firstname'
    ).then(function(){
        queryInterface.removeColumn(
        'Students',
        'lastname'
      )
    })
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.addColumn(
      'Students',
      'firstname',
      {
        type: Sequelize.STRING,
      }
    ).then(function(){
        queryInterface.addColumn(
        'Students',
        'lastname',
        {
          type: Sequelize.STRING,
        }
      )
    })
  }
};
