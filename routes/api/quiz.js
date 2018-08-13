const router = require("express").Router();
const quizController = require("../controller/quizController");

// Matches with "/api/books"
router.route("/:category")
  .get(quizController.findAllWhereCatMatches)

  module.exports = router;