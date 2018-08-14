const router = require("express").Router();
const userController = require("../controller/userController");

// Matches with "/api/books"
router.route("/:email")
  .get(userController.findAllWhereEmailMatches)
router.route('/signup')
  .post(userController.signUpNewUser)


  module.exports = router;


