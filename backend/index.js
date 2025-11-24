const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend funcionando 👍");
});

app.listen(4000, () => console.log("API corriendo en http://localhost:4000"));
