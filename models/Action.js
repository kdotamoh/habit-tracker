const action = (sequelize, DataTypes) => {
  const Action = sequelize.define(
    "action",
    {
      title: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.STRING
      },
      startsAt: {
        type: DataTypes.JSON
      },
      endsAt: {
        type: DataTypes.JSON
      },
      frequency: {
        type: DataTypes.ENUM,
        values: ["D", "W", "C"],
        defaultValue: "D"
      },
      days: {
        type: DataTypes.ARRAY(DataTypes.TEXT)
      }
    },
    {
      underscored: true
    }
  );

  Action.associate = models => {
    Action.belongsTo(models.User);
    Action.belongsToMany(models.Routine, {
      through: models.RoutineAction,
      foreignKey: "actionId"
      // constraints: false
    });
  };

  return Action;
};

module.exports = action;
