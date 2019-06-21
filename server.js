const express = require("express");
const app = express();
require("dotenv").config();
const db = require("./models");

app.get("/", (req, res) => {
  res.send("App running");
});

// Middleware
app.use(express.json());

// Routes
app.use("/api/users", require("./routes/api/users"));

const port = process.env.PORT || 5000;

db.sequelize.sync({ force: true }).then(async () => {
  app.listen(port, () => {
    console.log(`Listening on port:${port}`);
  });
});
