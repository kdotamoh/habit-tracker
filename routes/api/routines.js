const router = require("express").Router();
const db = require("../../models/index")

router.get("/", async (req, res) => {
  const routines = await db.models.Routine.findAll();
  res.send(routines);
});

module.exports = router;
