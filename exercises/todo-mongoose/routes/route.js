//import express
let express = require('express');

//make mini express app called a router
let todoRouter = express.Router();

//import model
let Todo = require("../models/todo.js");


//MAKING MIDDLEWARE to put all queries to lowercase
todoRouter.use((req, res, next) => {
  for(let key in req.query) {
    if(typeof req.query[key] === "string") {
      req.query[key] = req.query[key].toLowerCase();
    }
  }
  next();
});

todoRouter.get("/", (req, res) => {
  // console.log(req.query);
  Todo.find(req.query, (err, data) => {
    if(err) {
      res.status(500).send({"message": "Error within server", err});
    } else if(data === null) {
      res.status(404).send({"message":"ERROR, data not found", err})
    } else {
      res.status(200).send({"message":"SUCCESS, data returned", data});
    }
  });
});

todoRouter.get("/:id", (req, res) => {
  Todo.findOne({"_id": req.params.id}, (err, data) => {
    if(err) {
      res.status(500).send({"message": "Error within server", err});
    } else if(data === null) {
      res.status(404).send({"message":"ERROR, data not found", err})
    } else {
      res.status(200).send({"message":"SUCCESS, data returned", data});
    }
  });
});

todoRouter.post("/", (req, res) => {
  let newTodo = new Todo(req.body);
  newTodo.save((err, data) => {
    if(err) {
      res.status(500).send({"message":"ERROR within server", err});
    } else {
      res.status(201).send({"message":"SUCCESS, item created", data});
    }
  });
});

todoRouter.put("/:id", (req, res) => {
  Todo.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, data) => {
    if(err) {
      res.status(500).send({"message":"ERROR within server", err});
    } else if(data === null) {
      res.status(404).send({"message":"ERROR, data not found", err});
    } else {
      res.status(200).send({"message":"SUCCESS, item updated", data});
    }
  });
});

todoRouter.delete("/:id", (req, res) => {
  Todo.findByIdAndRemove(req.params.id, (err, data) => {
    if(err) {
      res.status(500).send({"message":"ERROR within server", err});
    } else if(data === null) {
      res.status(404).send({"message":"ERROR, data not found", err})
    } else {
      res.status(200).send({"message":"SUCCESS, item deleted"});
    }
  });
});

module.exports = todoRouter;
