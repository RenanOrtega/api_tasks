"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("tasks", "situation_id", {
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

    await queryInterface.addColumn("situations", "task_id", {
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
    await queryInterface.removeColumn("tasks", "situation_id");
    await queryInterface.removeColumn("situations", "task_id");
  },
};
