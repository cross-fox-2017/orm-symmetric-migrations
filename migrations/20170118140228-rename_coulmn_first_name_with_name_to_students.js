'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.renameColumn(
      "students",
      "first_name",
      "name"
    )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.renameColumn(
      "students",
      "first_name",
      "name"
    )
  }
};
