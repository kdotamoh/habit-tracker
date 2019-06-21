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
        type: DataType.DATE
      }
    },
    {
      underscored: true
    }
  );

  Routine.associate = models => {
    Routine.belongsTo(models.User);
  };

  return Routine;
};

module.exports = routine;
