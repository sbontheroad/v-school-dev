let rs = require('readline-sync');
let User = require('../models/user.js');
let settings = require("../config/settings.js");
let mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:27017/${settings.db}`)

let setup = () => {
  console.log("Starting init auth");
  let username= rs.question("Username: ");
  let password = rs.question("Password: ", {hideEchoBack: true});
  let newUser = new User({username, password, priv: "admin"});
  newUser.save((err, data) => {
    if(err) {
      console.log(err);
    } else {
      console.log(`User ${username} created`);
    }
  })
}

setup();
