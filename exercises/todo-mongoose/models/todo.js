let mongoose = require('mongoose');
let Schema = mongoose.Schema;



//the structure of the data in your collection
let todoSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  dateDue: {
    type: Date,
    default: Date.now
  },
  cost: Number
});


//mongoose.model('collection name', schema); - turns schema into a model
module.exports = mongoose.model('todolist', todoSchema);
