const express = require('express');
//handles JSON
const bodyParser = require('body-parser');
const cors = require('cors');
const uuid = require('uuid/v1');

const app = express();

const PORT = process.env.PORT || 8080;

let bountyArr = [
  {
    id: uuid(),
    name: "Ed",
    location: "tree house",
    price: 40,
    dead: false
  },
  {
    id: uuid(),
    name: "Bella",
    location: "tree house",
    price: 1000,
    dead: false
  },
  {
    id: uuid(),
    name: "Batman",
    location: "tree house",
    price: 100,
    dead: true
  }
];

//puts json as objects in req.body
app.use(bodyParser.urlencoded({extended: false}));

//this code replaces the use line above
// //happens for every request
// app.use((req, res, next) => {
//   console.log(req);
//   next();
// });

//allows cross site resource sharing
app.use(bodyParser.json());

//allows cross site resource sharing
app.use(cors());



app.get("/", (req, res) => {
  res.status(200).send({"message": "success, here is your data", data: bountyArr});
});

app.post("/", (req, res) => {
  let newBounty = req.body;
  newBounty.id = uuid();
  bountyArr.push(newBounty);
  res.status(201).send({"message": "success data was posted"});
});

app.get("/:id", (req, res) => {
  console.log(req.params);
  for(let i = 0; i < bountyArr.length; i++) {
    if(bountyArr[i].id === req.params.id) {
      res.send(bountyArr[i]);
      res.status(201).send({"message": "success, data was posted"});
    }
  }
  return res.status(404).send({
    message: "error, not found"
  });
})

app.delete("/:id", (req, res) => {
  for(let i = 0; i < bountyArr.length; i++) {
    if(bountyArr[i].id === req.params.id) {
      bountyArr.splice(i, 1);
      res.status(200).send({"message": "data was deleted"});
    }
  }
  return res.status(404).send({
    message: "error not found"
  })
})

app.put("/:id", (req,res) => {
  // console.log(req.body);
  for(let i = 0; i < bountyArr.length; i++) {
    if(bountyArr[i].id === req.params.id) {
      for(let key in req.body) {
        // console.log(key);
        //loop through each key in the request body
        if (bountyArr[i].hasOwnProperty(key)) {
          //check if current item has a property name of key value
          bountyArr[i][key] = req.body[key];
        }
      };
      return res.status(200).send({
        message: "UPDATE SUCCESSFUL"
      })
    }
  }
  return res.status(404).send({
    message: "error not found"
  })
})

app.listen(PORT, () => {
  console.log(`Starting server on port ${PORT}`);
});
