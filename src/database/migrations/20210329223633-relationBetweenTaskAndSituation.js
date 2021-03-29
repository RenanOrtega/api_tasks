"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("tasks", "id_situation", {
      type: Sequelize.INTEGER,
      references: {
        model: {
          tableName: "situations",
        },
        key: "id",
      },
      onDelete: "SET NULL",
      onUpdate: "CASCADE",
    });

    await queryInterface.addColumn("situations", "id_task", {
      type: Sequelize.INTEGER,
      references: {
        model: {
          tableName: "tasks",
        },
        key: "id",
      },
      onDelete: "SET NULL",
      onUpdate: "CASCADE",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("tasks", "id_situation");
    await queryInterface.removeColumn("situations", "id_task");
  },
};
