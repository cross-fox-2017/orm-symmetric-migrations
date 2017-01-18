'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Students','first_name')
    .then(function () {
      return queryInterface.removeColumn('Students','last_name')
    })
  },

  down: function (queryInterface, Sequelize) {
    return [
      queryInterface.addColumn(
        'Students',
        'first_name',
        {
          type: Sequelize.STRING
        }
      ),
      queryInterface.addColumn(
        'Students',
        'last_name',
        {
          type: Sequelize.INTEGER
        }
      )
    ];
  }
};
