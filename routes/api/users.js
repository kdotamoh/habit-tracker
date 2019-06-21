const router = require("express").Router();
const db = require("../../models/index");

router.get("/", async (req, res) => {
  const users = await db.models.User.findAll();
  res.send(users);
});

router.post("/", async (req, res) => {
  let body = req.body;

  try {
    const user = await db.models.User.create({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      password: body.password
    });
    res.send(user);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
