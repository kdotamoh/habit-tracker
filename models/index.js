const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: "postgres"
  }
);

const models = {
  User: sequelize.import("./User"),
  Routine: sequelize.import("./Routine"),
  Action: sequelize.import("./Action"),
  RoutineAction: sequelize.import("./RoutineAction")
};

Object.keys(models).forEach(key => {
  if ("associate" in models[key]) {
    models[key].associate(models);
  }
});

const db = {
  sequelize,
  models
};

module.exports = db;
