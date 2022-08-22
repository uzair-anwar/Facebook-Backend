const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const authRoutes = require("./src/routes/authRoutes");
const postRoutes = require("./src/routes/postRoutes");
const sequelize = require("./src/database/connection");
const post = require("./src/database/models/post");
const user = require("./src/database/models/user");
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
app.use("/post", postRoutes);

user.hasMany(post);
post.belongsTo(user);
sequelize.sync();

app.listen(process.env.SERVER_PORT, (err) => {
  if (err) {
    return console.log(
      `Connection not listion on port ${process.env.SERVER_PORT}`
    );
  }
  console.log(`Facebook app listening on port ${process.env.SERVER_PORT}!`);
});
