const router = require("express").Router();
const db = require("../../models/index");

router.get("/", async (req, res) => {
  const routines = await db.models.Routine.findAll();
  res.send(routines);
});

router.post("/", async (req, res) => {
  let { body } = req;

  try {
    const routine = await db.models.Routine.create({
      title: body.title,
      description: body.title,
      userId: body.userId
    });
    res.send(routine);
  } catch (err) {
    console.log(err);
  }
});

router.get("/user/:userId", async (req, res) => {
  const userRoutines = await db.models.Routine.findAll({
    where: {
      userId: req.params.userId
    }
  });
  res.send(userRoutines);
});

module.exports = router;
