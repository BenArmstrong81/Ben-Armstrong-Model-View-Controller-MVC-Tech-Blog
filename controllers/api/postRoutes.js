//-------------Required Paths and Packages:
const router = require("express").Router();
const { User, Post } = require("../../models");
const withAuth = require("../../utils/auth");

//--------------------------API Routes for Posts
//-------------Get All Posts:
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{ model: User, attributes: ["name"] }],
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//-------------Get a Single Post by ID:
router.get("/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [{ model: User, attributes: ["name"] }],
    });
    if (!postData) {
      res.status(404).json({ message: "No post found with that id!" });
      return;
    }
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//-------------Create a New Post (with Authentication)
router.post("/", withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

//-------------Update a Post by ID (with Authentication)
router.put("/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!postData) {
      res.status(404).json({ message: "Sorry, no post found with this id? Please try again" });
      return;
    }
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//-------------Delete a Post by ID (with Authentication)
router.delete("/:id", withAuth, async (req, res) => {
  try {
    console.log(`Attempting to delete post with id: ${req.params.id}`);
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!postData) {
      res.status(404).json({ message: "Sorry, no post found with this id? Please try again" });
      return;
    }
    console.log(`Deleted post with id: ${req.params.id}`);
    res.status(200).json(postData);
  } catch (err) {
    console.error(`Error deleting post with id: ${req.params.id}`);
    console.error(err);
    res.status(500).json(err);
  }
});

//-------------Exporting postRoutes file:
module.exports = router;