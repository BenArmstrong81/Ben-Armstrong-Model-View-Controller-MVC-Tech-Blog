//-------------Required Paths and Packages:
const router = require("express").Router();
const userRoutes = require("./userRoutes");
const postRoutes = require("./postRoutes");
const commentRoutes = require("./commentRoutes");

router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);

//-------------Exporting all apiRoute File's:
module.exports = router;