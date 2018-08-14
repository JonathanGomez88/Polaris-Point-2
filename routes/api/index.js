const router = require("express").Router();
const quizRoutes = require("./quiz");
const userRoutes = require("./user");

// Book routes
router.use("/quiz", quizRoutes);
router.use("/user", userRoutes);
module.exports = router;