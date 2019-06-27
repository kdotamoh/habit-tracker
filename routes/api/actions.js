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

router.get("/:id", async (req, res) => {
  let { id } = req.params;

  try {
    const action = await db.models.Action.findByPk(id);
    res.send(action);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const action = await db.models.Action.findByPk(id);
    await action.update(body);
    // await console.log("Success");
    res.send(action);
    // res.send(action);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    let action = await db.models.Action.findByPk(id);
    if (action) {
      await action.destroy();
      res.status(202).send("Success");
    } else {
      res.status(404).send("Not found");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.delete("/:id", (req, res) => {
  res.send("Not implemented");
});

module.exports = router;
