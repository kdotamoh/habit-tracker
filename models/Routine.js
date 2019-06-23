const routine = (sequelize, DataType) => {
  const Routine = sequelize.define(
    "routine",
    {
      title: {
        type: DataType.STRING
      },
      description: {
        type: DataType.STRING
      },
      startsAt: {
        type: DataType.JSON
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
