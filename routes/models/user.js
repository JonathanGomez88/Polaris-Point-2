// This may be confusing but here Sequelize (capital) references the standard library
// var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
// var sequelize = require("../config/connection.js");

// Creates a "subject" model that matches up with DB

module.exports = function(sequelize, DataTypes) {

var User = sequelize.define("User", {
  firstName: {
    type: DataTypes.STRING,
    notNull: true
  },
  lastName: {
    type: DataTypes.STRING,
    notNull: true
  },
  email: {
    type: DataTypes.STRING,
    notNull: true
  },
  password: {
    type: DataTypes.STRING,
    notNull: true,
    validate: {
        len: [6,12]
      }
  },
  gems: {
    type: DataTypes.INTEGER
  },
  canEarn: {
    type: DataTypes.BOOLEAN,
    default: false
  }
})
User.associate = function(models) {
  // Associating Author with Posts
  // When an Author is deleted, also delete any associated Posts
  User.hasMany(models.ScoreCard, {
    onDelete: "cascade"
  });
};
return User
}
