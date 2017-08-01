const express = require('express');
//handles JSON
const bodyParser = require('body-parser');
const cors = require('cors');
let mongoose = require('mongoose');

const PORT = process.env.PORT || 8080;

//import routes
let bountyRouter = require("./routes/bounty.js");

//connect mongoose to database
mongoose.connect("mongodb://localhost:27017/bounty");

const app = express();

//puts json as objects in req.body
app.use(bodyParser.urlencoded({extended: false}));

//this code replaces the use line above
// //happens for every request
// app.use((req, res, next) => {
//   console.log(req);
//   next();
// });

//allows cross site resource sharing
app.use(bodyParser.json());

//allows cross site resource sharing
app.use(cors());

//use routes
app.use("/bounty", bountyRouter);

app.listen(PORT, () => {
  console.log(`Starting server on port ${PORT}`);
});
