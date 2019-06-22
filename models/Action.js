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
  };

  return Action;
};

module.exports = action;
