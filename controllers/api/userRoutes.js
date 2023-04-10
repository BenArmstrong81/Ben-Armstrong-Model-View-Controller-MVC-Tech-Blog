//-------------Required Paths and Packages:
const router = require("express").Router();
const { User } = require("../../models");
const withAuth = require("../../utils/auth");

//-------------Register a New User:
router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body);
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      console.log("Session: ", req.session);
      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//-------------Login an Existing User:
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }
    const validPassword = userData.checkPassword(req.body.password);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      console.log("Session: ", req.session);
      res
        .status(200)
        .json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//-------------Logout the User:
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

//-------------Get the Users Profile (with Authentication)
router.get("/profile", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
    });
    if (!userData) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    const user = userData.get({ plain: true });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//-------------Exporting userRoutes file:
module.exports = router;