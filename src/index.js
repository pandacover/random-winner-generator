const path = require("path");
const express = require("express");
const { dirname } = require("path");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "pages/index.html"));
});

app.use("/assests", express.static(path.join(__dirname, "../public")));

app.listen(port, () => console.log("Server up"));
