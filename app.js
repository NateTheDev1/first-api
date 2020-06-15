const express = require("express");
const mongoose = require("mongoose");

// Used to hide db uri and password
require("dotenv/config");

//mongodb+srv://admin:passwordpassword@rest-fjpi5.mongodb.net/<dbname>?retryWrites=true&w=majority

// Create an application with express
const app = express();

// ROUTES

app.get("/", (req, res) => {
  res.send("We are on home");
});

app.get("/posts", (req, res) => {
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
