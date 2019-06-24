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
app.use("/api/routines", require("./routes/api/routines"));

const createUserWithRoutine = async () => {
  try {
    await db.models.User.create(
      {
        firstName: "Rob",
        lastName: "Pelinka",
        email: "robbyrob@hmail.swag",
        routines: [
          {
            title: "First",
            description: "Lorem",
            startsAt: {
              hh: 10,
              mm: 30
            },
            frequency: "W",
            days: ["M", "TU", "W", "TH", "F", "SA", "SU"]
          },
          {
            title: "Second",
            description: "Ipsum"
          }
        ]
      },
      {
        include: [db.models.Routine]
      }
    );
  } catch (err) {
    console.log(err);
  }
};

const port = process.env.PORT || 5000;

const refreshDB = true;

db.sequelize.sync({ force: refreshDB }).then(async () => {
  if (refreshDB) {
    createUserWithRoutine();
  }

  app.listen(port, () => {
    console.log(`Listening on port:${port}`);
  });
});
