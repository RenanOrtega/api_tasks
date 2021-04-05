"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("situations", "category_id", {
      type: Sequelize.INTEGER,
      references: {
        model: { tableName: "categories" },
        key: "id",
      },
      onDelete: "SET NULL",
      onUpdate: "CASCADE",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("situations", "category_id");
  },
};
