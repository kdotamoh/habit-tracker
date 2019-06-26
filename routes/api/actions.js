const router = require("express").Router();
const db = require("../../models");

router.get("/", async (req, res) => {
  try {
    let actions = await db.models.Action.findAll();
    res.send(actions);
  } catch (err) {
    console.error(err.message);
    res.status(400).send("Not found");
  }
});

router.post("/", async (req, res) => {
  let { body } = req;

  try {
    const action = await db.models.Action.create({
      title: body.title,
      description: body.description
    });

    if (body.routineId) {
      const routine = await db.models.Routine.findByPk(body.routineId);
      await routine.addAction(action);
    }
    res.send(action);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.get("/:id", (req, res) => {
  res.send("Not implemented");
});

router.delete("/:id", (req, res) => {
  res.send("Not implemented");
});

module.exports = router;
