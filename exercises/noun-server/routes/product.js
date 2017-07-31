//import express
let express = require('express');
//make a mini express app called a router
let productRouter = express.Router();
const uuid = require('uuid/v1');

let products = [];


productRouter.get("/", (req, res) => {
  //write search function for queries
  let search = products.filter((item) => {
    for(let key in req.query) {
      if(req.query[key] != item[key]){
        return false;
      }
    }
    return true;
  });
  res.status(200).send({"message" : "SUCCESS, data returned", data: search});
});

productRouter.post("/", (req, res) => {
  let newProducts = req.body;
  newProducts.id = uuid();
  products.push(newProducts);
  res.status(201).send({"message" : "SUCCESS, data was posted"});
});

productRouter.get("/:id", (req, res) => {
  for(let i = 0; i < products.length; i++) {
    if(products[i].id === req.params.id) {
      res.send(products[i]);
      res.status(201).send({"message" : "SUCCESS, data was posted"});
    }
  }
  return res.status(404).send({
    message: "ERROR, not found"
  });
});

productRouter.delete("/:id", (req, res) => {
  for(let i = 0; i < products.length; i++) {
    if(products[i].id === req.params.id) {
      products.splice(i, 1);
      res.status(200).send({"message" : "SUCCESS, data was deleted"});
    }
  }
  return res.status(404).send({
    message: "ERROR, not found"
  });
});

productRouter.put("/:id", (req, res) => {
  for(let i = 0; i < products.length; i++) {
    if(products[i].id === req.params.id) {
      for(let key in req.body) {
        if(products[i][key] = req.body[key]) {
          products[i][key] = req.body[key];
        }
      };
      return res.status(200).send({
        message: "AW YEAH (SUCCESS)"
      });ß
    }
  }
  return res.status(404).send({
    message: "ERROR, requested item not found"
  })
});


module.exports = productRouter;
