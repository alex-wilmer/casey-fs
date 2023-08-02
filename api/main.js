let express = require("express");

let app = express();

app.get("/", (req, res) => {
  res.json({ messge: "hello world " });
});

app.listen(8080, () => {
  console.log("app running on 8080");
});
