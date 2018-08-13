const router = require("express").Router();
const userController = require("../controller/userController");

// Matches with "/api/books"
router.route("/:email")
  .get(userController.findAllWhereEmailMatches)



module.exports = router;