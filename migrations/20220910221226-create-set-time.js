"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("set_times", {
      set_time_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      event_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      stage_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      band_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      set_start: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      set_end: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("set_times");
  },
};
