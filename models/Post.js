const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connections");

// create post title, contents, post creator’s username & timestamp
class Post extends Model {}

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
    timestamps: true, // This enable timestamps to use build-in Sequelize methods to show the date create
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Post;