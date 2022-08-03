const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const routes = require("./src/routes");
require("dotenv").config();
const port = process.env.PORT;
const app = express();

app.use(express.static("./public"));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

app.use("/", routes);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
