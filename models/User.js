const user = (sequelize, DataType) => {
  const User = sequelize.define(
    "user",
    {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      firstName: {
        type: DataType.STRING
      },
      lastName: {
        type: DataType.STRING
      },
      email: {
        type: DataType.STRING
      },
      password: {
        type: DataType.STRING
      }
    },
    {
      underscored: true
    }
  );

  User.associate = models => {
    User.hasMany(models.Routine, { onDelete: "CASCADE" });
  };

  return User;
};

module.exports = user;
