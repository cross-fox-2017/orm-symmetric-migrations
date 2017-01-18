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
      'first_name'
    ).then(function(){
        queryInterface.removeColumn(
        'Students',
        'last_name'
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
      'first_name',
      {
        type: Sequelize.STRING,
      }
    ).then(function(){
        queryInterface.addColumn(
        'Students',
        'last_name',
        {
          type: Sequelize.STRING,
        }
      )
    })
  }
};
