module.exports = function(sequelize, DataTypes) {

    var ScoreCard = sequelize.define("ScoreCard", {
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
       
        ScoreCard.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        });
      };
    return ScoreCard
    }