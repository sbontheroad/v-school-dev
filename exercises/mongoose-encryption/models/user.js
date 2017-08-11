let mongoose = require('mongoose');
let bcrypt = require('bcrypt');
let salt = bcrypt.genSaltSync(10);
let Schema = mongoose.Schema;


let userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

//can't use es6 function because this makes a new 'this'
//next says run it and continue once done
//this is all a hook - like middleware
userSchema.pre("save", function(next) {
  // console.log(this);
  this.password = bcrypt.hashSync(this.password + this.username, salt);
  next();
});

//authentication method.  cb is callback.
userSchema.methods.auth = function(passwordAttempt, cb) {
  //compare is a method from bcrypt.  this is the password whose username we are authenticating.
  bcrypt.compare(passwordAttempt + this.username, this.password, (err, result) => {
    if(err) {
      //if our code breaks
      console.log(err);
      cb(false);
    } else if (result) {
      //if passwords were the same
      cb(true);
    } else {
      //if passwords were different
      cb(false);
    }
  });
}

module.exports = mongoose.model("users", userSchema);
