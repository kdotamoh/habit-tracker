const habit = (sequelize, DataTypes) => {
  const Habit = sequelize.define("habit", {
    title: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    startsAt: {
      type: DataTypes.DATE
    },
    endsAt: {
      type: DataTypes.DATE
    }
  });

  Habit.associate = models => {
    Habit.belongsTo(models.User);
  };

  return Habit;
};

module.exports = habit;
