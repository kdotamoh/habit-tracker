const action = (sequelize, DataTypes) => {
  const Action = sequelize.define("action", {
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

  Action.associate = models => {
    Action.belongsTo(models.User);
    Action.belongsToMany(models.Routine, {
      through: models.RoutineAction,
      foreignKey: "actionId",
      constraints: false
    });
  };

  return Action;
};

module.exports = action;
