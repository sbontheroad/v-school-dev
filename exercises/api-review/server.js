const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//import routes
let bucketListRouter = require("./routes/bucket-list.js");

const app = express();
const PORT = process.env.PORT || 8000;

//use is middleware - says use this for everything
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use("/bucketlist", bucketListRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${8000}`);
})
