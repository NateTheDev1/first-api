const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// Used to hide db uri and password
require("dotenv/config");

// Create an application with express
const app = express();

// MIDDLWARES
app.use(cors());
app.use(bodyParser.json());

//body-parser built in??
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

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
