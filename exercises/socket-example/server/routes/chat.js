let express = require('express');
let chatRouter = express.Router();

//import model
let Chat = require('../models/chat.js');

chatRouter.get("/", (req, res) => {
  Chat.find({}, (err, data) => {
    if(err) {
      res.status(500).send({"message":"INTERNAL ERROR", err});
    } else {
      res.status(200).send({"message":"DATA RETURNED", data});
    }
  });
});

module.exports = chatRouter;
