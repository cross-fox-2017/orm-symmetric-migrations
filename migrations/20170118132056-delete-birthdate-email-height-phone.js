'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Students','email')
    .then(function () {
      return queryInterface.removeColumn('Students','height')
    }).then(function () {
      return queryInterface.removeColumn('Students','phone')
    }).then(function () {
      return queryInterface.removeColumn('Students','birthdate')
    })
  },

  down: function (queryInterface, Sequelize) {
    return [
      queryInterface.addColumn(
        'Students',
        'birthdate',
        {
          type: Sequelize.STRING
        }
      ),
      queryInterface.addColumn(
        'Students',
        'email',
        {
          type: Sequelize.STRING
        }
      ),
      queryInterface.addColumn(
        'Students',
        'height',
        {
          type: Sequelize.INTEGER
        }
      ),
      queryInterface.addColumn(
        'Students',
        'phone',
        {
          type: Sequelize.STRING
        }
      )
    ];
  }
};
