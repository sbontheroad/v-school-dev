let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//the structure of data in your collection
let bountySchema = new Schema ({
    name: {
      type: String,
      required: true
    },
    location: String,
    price: Number,
    dead: String
});


module.exports = mongoose.model('bountylist', bountySchema);
