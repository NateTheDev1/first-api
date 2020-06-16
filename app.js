const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Used to hide db uri and password
require("dotenv/config");

// Create an application with express
const app = express();
app.use(bodyParser.json());

//Import routes

const postRoutes = require("./routes/posts");
app.use("/posts", postRoutes);

// Routes

app.get("/", (req, res) => {
  res.send("We are on posts");
});

//Connect to db
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to db");
  }
);

// How we start listening to the server
app.listen(3000);
