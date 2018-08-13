module.exports = function(sequelize, DataTypes) {

    var ScoreCard = sequelize.define("User", {
      category: {
        type: DataTypes.STRING,
        notNull: true
      },
      correctPercent: {
        type: DataTypes.INTEGER,
        notNull: true
      },
    })
    ScoreCard.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        ScoreCard.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        });
      };
    return ScoreCard
    }