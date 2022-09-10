"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Event.init(
    {
      event_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      event_name: { type: DataTypes.STRING, allowNull: false },
      event_date: { type: DataTypes.DATE, allowNull: false },
      event_start: { type: DataTypes.DATE, allowNull: false },
      event_end: { type: DataTypes.DATE, allowNull: false },
    },
    {
      sequelize,
      modelName: "Event",
      tableName: "events",
      timestamps: false,
    }
  );
  return Event;
};
