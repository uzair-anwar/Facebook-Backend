const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const authRoutes = require("./src/routes/authRoutes");
const port = process.env.PORT;
const app = express();

require("dotenv").config();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: [`${process.env.FRONTEND_URL}`],
    credentials: true,
  })
);

app.use("/auth", authRoutes);

app.listen(process.env.PORT, (err) => {
  if (err) {
    return console.log(`Connection not listion on port ${process.env.PORT}`);
  }
  console.log(`Facebook app listening on port ${process.env.PORT}!`);
});
