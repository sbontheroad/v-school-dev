let express = require('express');
let cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/map-template");

const PORT = process.env.PORT || 9000;

let markerRouter = require('./routes/maps.js');

const app = express();

app.use(bodyParser.urlencoded({encoded: false}));

app.use(bodyParser.json());

app.use(cors());

app.use("/map", markerRouter);

app.listen(PORT, () => {
  console.log(`Getting your map up and running on ${PORT}`);
});
