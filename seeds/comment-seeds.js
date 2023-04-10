//-------------Required Path:
const { Comment } = require("../models");
//-------------Constructing Comment's:
const commentData = [
  {
    comment_text: "Wow! Great article",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "Back in my day you raced by feel and no facy computers were needed!",
    user_id: 2,
    post_id: 3,
  },
  {
    comment_text: "Very interesting, wonder how soon people move to IPv6?",
    user_id: 3,
    post_id: 2,
  },
  {
    comment_text: "Very informative, thanks for sharing",
    user_id: 4,
    post_id: 4,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);
//-------------Exporting Comments's:
module.exports = seedComments;