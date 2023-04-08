const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

// ------------User Related----------------
// user has many posts
User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// user has many comments
User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// ------------Post Related----------------
// Post has many comments and comments deleted when post is deleted
Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

// posts belong to user
Post.belongsTo(User, {
  foreignKey: "user_id",
});

// ------------Comment Related----------------
// comments belong to user
Comment.belongsTo(User, {
  foreignKey: "user_id",
});

// comments belong to post
Comment.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

module.exports = { User, Post, Comment };