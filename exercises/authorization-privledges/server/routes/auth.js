let express = require('express');
let authRouter = express.Router();

//import settings
let settings = require('../config/settings.js');

//import user model
let User = require('../models/user.js');

//import passport modules
let passport = require('passport');
let Strategy = require('passport-local');

//for tokens
let jwt = require('jsonwebtoken');

//done is passport specific - like a true/false
//if you have an error it gets passed in first - passport wrote it that way
passport.use(new Strategy((username, password, done) => {
  User.findOne({username}, (err, currentUser) => {
    if(err) {
      done(err, false);
    } else if (currentUser === null) {
      done(null, false);
    } else {
      currentUser.auth(password, (isCorrect) => {
        if(isCorrect) {
          done(null, true);
        } else {
          done(null, false);
        }
      });
    }
  });
}));

//start up passport
authRouter.use(passport.initialize());

//login a user
authRouter.post('/login', passport.authenticate("local", {session: false}), (req, res) => {
  User.findOne({username: req.body.username}, (err, data) => {
    if(err) {
      res.status(500).send({"message":"ERROR within server", err});
    } else if (data === null) {
      res.status(404).send({"message":"No user found with this username"});
    } else {
      let payload = {
        username: data.username
      };
      res.status(201).send({
        "message":"SUCCESS auth token issued",
        //time is in seconds, so this is 30 seconds times 60 for 30 minutes
        token: jwt.sign(payload, settings.secret, {expiresIn: 30 * 60})
    });
    }
  });
});



//post userSchema
authRouter.post('/signup', (req, res) => {
  let makeUser = new User(req.body);
  makeUser.save((err, result) => {
    if(err) {
      res.status(500).send({"message":"ERROR within server", err});
    } else {
      res.status(201).send({"message":`User ${result.username} was created`});
    }
  });
});

module.exports = authRouter;
