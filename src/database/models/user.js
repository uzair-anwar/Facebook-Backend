const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../connection");
module.exports = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(300),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(300),
      allowNull: false,
    },
  },
  {
    tableName: "users",
  }
);
