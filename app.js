// Execution starts from here

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/ninjadb');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use("/api", require('./routes/api'));

app.listen(process.env.port || 4000, function() {
  console.log("Server started now....");
});

app.use(function(err, request, response, next) {
  console.log("Error: " + err);
  response.status(503).send(err.message); // can set status code from here
});
