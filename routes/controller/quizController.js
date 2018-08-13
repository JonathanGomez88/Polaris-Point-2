const db = require("../models");

// Defining methods for the quizController
module.exports = {
  findAllWhereCatMatches: function(req, res) {
    // console.log(req.params.category)
    db.Question
      .findAll({where: {
        category: req.params.category
      },
        include: [{all:true}]
     })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
}