const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../connection");
const user = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
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

user.associate = (models) => {
  user.hasMany(models.post, {
    onDelete: "cascade",
  });
};

module.exports = user;
