const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../connection");
const post = sequelize.define(
  "post",
  {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(300),
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING(1234),
      allowNull: false,
    },
  },
  {
    tableName: "posts",
  }
);

post.associate = (models) => {
  post.belongsTo(models.user, {
    foreignKey: {
      allowNull: false,
    },
  });
};

module.exports = post;
