"use strict";module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('category', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name_category: {
      type: Sequelize.STRING,
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

    return queryInterface.dropTable('category');

  }
};