"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Set_Time extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Band, Event, Stage }) {
      //Band
      Set_Time.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band",
      });

      //Event
      Set_Time.belongsTo(Event, {
        foreignKey: "event_id",
        as: "event",
      });

      //Stage
      Set_Time.belongsTo(Stage, {
        foreignKey: "stage_id",
        as: "stage",
      });
    }
  }
  Set_Time.init(
    {
      set_time_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      event_id: { type: DataTypes.INTEGER, allowNull: false },
      stage_id: { type: DataTypes.INTEGER, allowNull: false },
      band_id: { type: DataTypes.INTEGER, allowNull: false },
      set_start: { type: DataTypes.DATE, allowNull: false },
      set_end: { type: DataTypes.DATE, allowNull: false },
    },
    {
      sequelize,
      modelName: "Set_Time",
      tableName: "set_times",
      timestamps: false,
    }
  );
  return Set_Time;
};
