const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8080;

//import routes
let voteRouter = require('./routes/vote.js');
let markerRouter = require('./routes/maps.js');

//connects mongoose to database
mongoose.connect("mongodb://localhost:27017/vote");

const app = express();

//puts json objects in req.body
app.use(bodyParser.urlencoded({extended: false}));

//allows cross site resource sharing
app.use(bodyParser.json());

//allows cross site sharing
app.use(cors());

//use routes
app.use("/votes", voteRouter);
app.use("/map", markerRouter);

app.listen(PORT, () => {
  console.log(`Starting this kickass server on ${PORT}`);
});
