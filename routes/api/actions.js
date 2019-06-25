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
    await db.models.Action.create({
      title: body.title,
      description: body.description,
      startsAt: body.startsAt,
      endsAt: body.endsAt,
      frequency: body.frequency,
      days: body.days
    });
    res.send("Not implemented");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.get("/:id", (req, res) => {
  res.send("Not implemented");
});

router.delete("/:id", (req, res) => {
  res.send("Not implemented");
});

module.exports = router;
