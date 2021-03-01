"use strict";module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('tasks', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    responsible: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    category: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    situation: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    dt_delivery: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),


  down: async (queryInterface, Sequelize) => {

    return queryInterface.dropTable('tasks');

  }
};
