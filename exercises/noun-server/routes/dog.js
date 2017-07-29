//import express
let express = require('express');
//make a mini express app called a router
let dogRouter = express.Router();
const uuid = require('uuid/v1');

let dogs = [
  {
    breed: "Shepard",
    weight: 110,
    temperment: "loyal",
    id: "35bd1e90-73de-11e7-b948-937614c41794"
    }
]

dogRouter.get("/", (req, res) => {
  //write search function for queries
  let search = dogs.filter((item) => {
    for(let key in req.query) {
      if(req.query[key] != item[key]){
        return false;
      }
    }
    return true;
  });
  res.status(200).send({"message" : "SUCCESS, data returned", data: search});
});

dogRouter.post("/", (req, res) => {
  let newDogs = req.body;
  newDogs.id = uuid();
  dogs.push(newDogs);
  res.status(201).send({"message" : "SUCCESS, data was posted"});
});

dogRouter.get("/:id", (req, res) => {
  for(let i = 0; i < dogs.length; i++) {
    if(dogs[i].id === req.params.id) {
      res.send(dogs[i]);
      res.status(201).send({"message" : "SUCCESS, data was posted"});
    }
  }
  return res.status(404).send({
    message: "ERROR, not found"
  });
});

dogRouter.delete("/:id", (req, res) => {
  for(let i = 0; i < dogs.length; i++) {
    if(dogs[i].id === req.params.id) {
      dogs.splice(i, 1);
      res.status(200).send({"message" : "SUCCESS, data was deleted"});
    }
  }
  return res.status(404).send({
    message: "ERROR, not found"
  });
});

dogRouter.put("/:id", (req, res) => {
  for(let i = 0; i < dogs.length; i++) {
    if(dogs[i].id === req.params.id) {
      for(let key in req.body) {
        if(dogs[i][key] = req.body[key]) {
          dogs[i][key] = req.body[key];
        }
      };
      return res.status(200).send({
        message: "AW YEAH (SUCCESS)"
      });
    }
  }
  return res.status(404).send({
    message: "ERROR, requested item not found"
  })
});


module.exports = dogRouter;
