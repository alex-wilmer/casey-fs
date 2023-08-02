let express = require("express");
let cors = require("cors");

let app = express();

app.use(cors());

let PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.json({ messge: "hello world " });
});

app.listen(PORT, () => {
  console.log(`app running on ${PORT}`);
});
