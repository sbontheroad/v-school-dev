let mongoose = require('mongoose');
let rs = require('readline-sync');

let User = require('./models/user.js');

mongoose.connect("mongodb://localhost:27017/userexample");

let username = rs.question("Username: ");
let password = rs.question("Password: ", {hideEchoBack: true});

// let createUser = new User({
//   username,
//   password
//   //same as username: username, password: password
// });
//
// createUser.save((err, data) => {
//   err ? console.log(err) : console.log("New user was saved", data);
// });

//username there is es6, same as username: username
User.findOne({username}, (err, currentUser) => {
  if(err) {
    console.log(err);
  } else if (currentUser === null) {
    console.log ("user not found");
  } else {
    currentUser.auth(password, (isCorrect) => {
      if(isCorrect) {
        console.log("Success: username and password are correct");
      } else {
        console.log("Error: invalid password");
      }
    });
  }
});
