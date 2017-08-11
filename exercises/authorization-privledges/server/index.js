const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
let settings = require('./config/settings.js');

//import routes
let authRouter = require('./routes/auth.js');
let testRouter = require('./routes/test.js');

let PORT = process.env.PORT || settings.port;

mongoose.connect(`mongodb://localhost:27017/${settings.db}`);

let app = express();

app.use(cors());
app.use(bodyParser.urlencoded({encoded:false}));
app.use(bodyParser.json());

app.use('/auth', authRouter);
app.use('/test', testRouter);

app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});
