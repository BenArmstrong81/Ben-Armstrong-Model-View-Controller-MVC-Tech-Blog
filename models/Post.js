//-------------Required Paths and Packages:
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

//---------------Creates a class called Post:
class Post extends Model {}
//---------------Defines the Parameters to be Captured for the Table:
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: true, // Enable timestamps to use build-in Sequelize methods to show date_created
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);
//-------------Exporting Post's
module.exports = Post;