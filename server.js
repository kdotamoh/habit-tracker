const app = require("express")()
require("dotenv").config()

app.get("/", (req, res) => {
  res.send("App running")
})

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Listening on port:${port}`)
})
