const routineAction = (sequelize, DataTypes) => {
  const RoutineAction = sequelize.define("routine_action", {
    routineId: {
      type: DataTypes.INTEGER
    },
    actionId: {
      type: DataTypes.INTEGER
    }
  });

  return RoutineAction;
};

module.exports = routineAction;
