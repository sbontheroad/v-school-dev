let express = require('express');
let authRouter = express.Router();
let expressJwt = require('express-jwt');

//import settings
let settings = require('../config/settings.js');

//need if you want someone signed in to use
let authorization = expressJwt({secret: settings.secret});
//import privledges - admin
let admin = require('../middleware/admin.js');

//import user model
let User = require('../models/user.js');
let UserQue = require('../models/userque.js');

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
  User.findOne({username: req.body.username}, (err, result) => {
    if(err) {
      res.status(500).send({"message":"ERROR within server", err});
    } else if (result !== null) {
      res.status(400).send({"message": "Username is already taken"});
    } else {
      let makeUser = new UserQue(req.body);
      makeUser.save((err, result) => {
        if(err) {
          res.status(500).send({"message":"ERROR within server", err});
        } else {
          res.status(201).send({"message":`User ${result.username} was created`});
        }
      });
    }
  });
});

// authRouter.post('/signup', (req, res) => {
//   let makeUser = new User(req.body);
//   makeUser.save((err, result) => {
//     if(err) {
//       res.status(500).send({"message":"ERROR within server", err});
//     } else {
//       res.status(201).send({"message":`User ${result.username} was created`});
//     }
//   });
// });

authRouter.get("/userque", authorization, admin, (req, res) => {
   console.log("here")
  UserQue.find({}, (err, data) => {
    if(err) {
      res.status(500).send({"message": "ERROR within server", err});
    } else {
      res.status(200).send({"message": "SUCCESS user que", data});
    }
  });
});

authRouter.post("/user", authorization, admin, (req, res) => {
  let newUser = new User(req.body);
  newUser.save((err, data) => {
    if(err) {
      res.status(500).send({"message":"ERROR within server", err});
    } else {
      res.status(201).send({`"message":"User was created with username: ${data.username}`});
    }
  });
});

authRouter.delete("/user", authorization, admin, (req, res) => {
  User.findByIdAndRemove({_id: req.body._id}, (err, data) => {
    if(err) {
      res.status(500).send({"message":"ERROR within server", err});
    } else if (data === null) {
      res.status(404).send({"message": `User with id ${data._id} was not found`});
    } else {
      res.status(200).send({"message": `Deleted user with username: ${data.username}`});
    }
  });
});

module.exports = authRouter;
