const router = require("express").Router();
const userController = require("../controller/userController");

// Matches with "/api/books"
router.route("/:email")
  .get(userController.findAllWhereEmailMatches)
  router.route("/:password")
  .get(userController.findAllWherePasswordMatches)
  module.exports = router;