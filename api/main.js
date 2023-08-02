let express = require("express");

let app = express();

let PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.json({ messge: "hello world " });
});

app.listen(PORT, () => {
  console.log(`app running on ${PORT}`);
});
