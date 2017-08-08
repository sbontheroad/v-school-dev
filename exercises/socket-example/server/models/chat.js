let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let chatSchema = new Schema({
  username: String,
  message: String
});

module.exports = mongoose.model("chat", chatSchema);
