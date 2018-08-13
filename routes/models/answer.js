module.exports = function(sequelize, DataTypes) {

    var Answer = sequelize.define("Answer", {
        text: { 
            type: DataTypes.STRING,
            notNull: true
        },
        isCorrect: {
            type: DataTypes.BOOLEAN,
            notNull: true
        }
    })
    Answer.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Answer.belongsTo(models.Question, {
          foreignKey: {
            allowNull: false
          }
        });
      };
    return Answer
}