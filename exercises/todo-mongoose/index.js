let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let mongoose = require('mongoose');

//define port
const PORT = process.env.PORT || 8080;

//require routes
let todoRouter = require("./routes/route.js");

//mongoose docs never straight up connec to database, do this:
mongoose.connect("mongodb://localhost:27017/todos");


//make the base app
let app = express();

//body-parser middleware(goes between client and end point)
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//cors
app.use(cors());

//use the routes
app.use("/todo", todoRouter);

app.listen(PORT, () => {
  console.log(`Starting this kickass server on ${PORT}`);
});
