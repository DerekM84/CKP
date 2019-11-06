const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

const path = require("path");
const router = require("express").Router();


app.get("/", function(req, res) {
  res.json(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });