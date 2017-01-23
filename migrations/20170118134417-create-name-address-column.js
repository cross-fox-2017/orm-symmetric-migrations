'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return [
      queryInterface.addColumn(
        'Students',
        'full_name',
        {
          type: Sequelize.STRING
        }
      ),
      queryInterface.addColumn(
          'Students',
          'address',
          {
            type: Sequelize.STRING
          }
        )]
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return [queryInterface.removeColumn('Students', 'full_name'),
            queryInterface.removeColumn('Students', 'address')]
  }
};
