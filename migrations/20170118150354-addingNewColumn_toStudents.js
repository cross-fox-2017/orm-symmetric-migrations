'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      "students",
      "address",
      {
        type: Sequelize.STRING
      }
    )
  },

  down: function (queryInterface, Sequelize) {

  }
};
