let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');

//socket.io imports
let socketIO = require('socket.io');

//setup endpoints
let chatRouter = require('./routes/chat.js')

const PORT = process.env.PORT || 9000;

//base app
let app = express();

//setup middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

//setup endpoints
app.use("/chat", chatRouter);

let server = app.listen(PORT, () => {
  console.log(`Starting kickass socket example server on ${PORT}`);
});

//make an instance of socket.io called io
let io = socketIO(server);

io.on("connection", (socket) => {
  console.log(`Client has connected with id of ${socket.id}`);
});

//end line
