const db = require("../models");

// Defining methods for the quizController
module.exports = {
  findAllWhereEmailMatches: function(req, res) {
    console.log(req.params.email)
    db.User
      .findAll({where: {
        email: req.params.email
      }})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  signUpNewUser: function(req, res) {
    console.log(req.body)
    db.User
      .create(req.body)
      .then(response => {
        res.json(response)
      })
      .catch(err => console.log(err))
  }
}
