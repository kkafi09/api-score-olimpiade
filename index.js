require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./api/user");
const scoreRoutes = require("./api/score");
const bodyParser = require("body-parser");
const cors = require("cors");

// express app
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to express" });
});

app.use("/api/users", userRoutes);
app.use("/api/scores", scoreRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log("Connected to mongodb and Express running on port " + port);
    });
  })
  .catch((error) => console.log(error));

module.exports = app;