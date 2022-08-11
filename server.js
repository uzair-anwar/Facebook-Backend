const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
var path = require("path");
const authRoutes = require("./src/routes/authRoutes");
const postRoutes = require("./src/routes/postRoutes");
const sequelize = require("./src/Database/connection");
require("dotenv").config();
const post = require("./src/Database/models/post");
const user = require("./src/Database/models/user");

const port = process.env.PORT;
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: "GET,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoutes);
app.use("/post", postRoutes);

user.hasMany(post);
post.belongsTo(user);

app.listen(port, (err) => {
  if (err) {
    return console.log(`Con not listion on pot ${port}`);
  }
  console.log(`Example app listening on port ${port}!`);
});
