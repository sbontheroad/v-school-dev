let express = require('express');
let testRouter = express.Router();
let expressJwt = require('express-jwt');
let settings = require("../config/settings.js");
//make middleware
let authorization = expressJwt({secret: settings.secret});

// testRouter.get('/events', (req, res) => {
//   res.status(200).send({"message": "Here are the events at the test", data: []});
// });

testRouter.get('/events', (req, res) => {
  res.status(200).send({"message": "Here are the events at the test",
  data: [
    {
    checkIn: "11:00 AM",
    checkOut: "4:00PM",
    title: "Breakfast",
    description: "French Toast"
  },
  {
  checkIn: "12:00 AM",
  checkOut: "3:00PM",
  title: "Lunch",
  description: "BLT"
}
  ]});
});

// testRouter.get('/guests', authorization, (req, res) => {
//   res.status(200).send({"message":"Here are the guests at the hotel", data: []});
// });

testRouter.get('/guests', authorization, (req, res) => {
  res.status(200).send({"message":"Here are the guests at the hotel",
  data: [
    {
    firstName: "Caleb",
    lastName: "Black",
    roomNumber: 4
  },
  {
    firstName: "Sarah",
    lastName: "Baldwin",
    roomNumber: "Penthouse Suite"
  }
  ]});
});

module.exports = testRouter;
