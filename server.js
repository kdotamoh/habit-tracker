const app = require("express")();
require("dotenv").config();
const db = require("./models");

app.get("/", (req, res) => {
  res.send("App running");
});

const port = process.env.PORT || 5000;

db.sequelize
  .authenticate()
  .then(() => {
    console.log("Connection OK");
  })
  .catch(err => {
    console.log("Error:", err);
  });

app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
