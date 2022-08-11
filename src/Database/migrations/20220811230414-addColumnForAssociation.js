"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn(
      "posts", // name of Source model
      "userId", // name of the key we're adding
      {
        type: Sequelize.STRING,
        references: {
          model: "users", // name of Target model
          key: "id", // key in Target model that we're referencing
        },
      }
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      "posts", // name of Source model
      "userId" // key we want to remove
    );
  },
};
