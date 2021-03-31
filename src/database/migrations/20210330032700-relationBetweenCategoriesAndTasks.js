"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("tasks", "id_categoria", {
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
    await queryInterface.removeColumn("tasks", "id_categoria");
  },
};
