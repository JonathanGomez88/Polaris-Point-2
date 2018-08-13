module.exports = function(sequelize, DataTypes) {

    var Question = sequelize.define("Question", {
      text: {
        type: DataTypes.STRING,
        notNull: true
      },
      category: {
          type: DataTypes.STRING,
          notNull: true
      }
    })
    Question.associate = function(models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        Question.hasMany(models.Answer, {
          onDelete: "cascade"
        });
      };
    return Question
}