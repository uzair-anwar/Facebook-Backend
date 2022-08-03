const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
var path = require("path");
const routes = require("./src/routes/routes");
require("dotenv").config();
const port = process.env.PORT;
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

app.use("/", routes);

app.listen(port, (err) => {
  if (err) {
    return console.log(`Con not listion on pot ${PORT}`);
  }
  console.log(`Example app listening on port ${port}!`);
});
