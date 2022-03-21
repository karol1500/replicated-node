const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello world: " + new Date().getTime());
});

app.listen(5000, (err) => {
  console.log("Started server on port: 5000");
});
