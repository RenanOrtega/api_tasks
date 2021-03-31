"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("categories", "id_user", {
      type: Sequelize.INTEGER,
      references: {
        model: { tableName: "users" },
        key: "id",
      },
      onDelete: "SET NULL",
      onUpdate: "CASCADE",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("categories", "id_user");
  },
};
