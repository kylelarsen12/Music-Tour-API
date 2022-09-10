"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("events", {
      event_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      event_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      event_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      event_start: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      event_end: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("events");
  },
};
