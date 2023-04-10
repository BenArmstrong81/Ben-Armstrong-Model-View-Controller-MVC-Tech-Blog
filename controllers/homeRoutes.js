//-------------Required Paths and Packages:
const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

//-------------Get all Blog Posts and Displays Them on the Homepage:
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{ model: User, attributes: ["name"] }, { model: Comment }],
    });

    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts);
    res.render("home", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//-------------Gets a Blog Post by the ID:
router.get("/post/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ["name"],
            },
          ],
        },
      ],
    });
    if (!postData) {
      res.status(404).json({ message: "No post found with this id" });
      return;
    }

    const post = postData.get({ plain: true });
    res.render("singlePost", {
      ...post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//-------------Use withAuth Middleware to Prevent Access to Route:
router.get("/profile", withAuth, async (req, res) => {
  try {
    //-------------Find the Logged in User Based on the Session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Post }],
    });
    const user = userData.get({ plain: true });
    res.render("profile", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//-------------Render the Login/Signup Page:
router.get("/login", (req, res) => {
  //-------------If the User is Already Logged In, Redirect the Request to Another Route:
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

//-------------Exporting homeRouter file:
module.exports = router;