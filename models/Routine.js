const routine = (sequelize, DataTypes) => {
  const Routine = sequelize.define(
    "routine",
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

  Routine.associate = models => {
    Routine.belongsTo(models.User);
    Routine.belongsToMany(models.Action, {
      through: models.RoutineAction,
      foreignKey: "routineId",
      constraints: false
    });
  };

  return Routine;
};

module.exports = routine;
