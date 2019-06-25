const routineAction = (sequelize, DataTypes) => {
  const RoutineAction = sequelize.define(
    "routine_action",
    {
      routineId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Routine",
          key: "id"
        }
      },
      actionId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Action",
          key: "id"
        }
      }
    },
    {
      underscored: true
    }
  );

  RoutineAction.associate = models => {
    RoutineAction.belongsTo(models.Routine, { foreignKey: "routineId" });
    RoutineAction.belongsTo(models.Action, { foreignKey: "actionId" });
  };

  return RoutineAction;
};

module.exports = routineAction;
