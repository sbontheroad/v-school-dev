let express = require('express');
let testRouter = express.Router();
let expressJwt = require('express-jwt');
let settings = require("../config/settings.js");
//make middleware
let authorization = expressJwt({secret: settings.secret});

testRouter.get('/events', (req, res) => {
  res.status(200).send({"message": "Here are the events at the test", data: []});
});

testRouter.get('/guests', authorization, (req, res) => {
  res.status(200).send({"message":"Here are the guests at the hotel", data: []});
});

module.exports = testRouter;
