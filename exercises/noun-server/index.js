
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//import routes
let dogRouter = require("./routes/dog.js");

const app = express();
const PORT = process.env.PORT || 8080;

//use is middleware - says use this for everything
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

//use our routes
app.use("/dogs", dogRouter);

app.listen(PORT, () => {
  console.log(`Starting this kick ass server on ${PORT}`);
});
