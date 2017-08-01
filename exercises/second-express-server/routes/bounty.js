let express = require('express');
let bountyRouter = express.Router();
let Bounty = require("../models/bounty.js");


//making middleware
// bountyRouter.use((req, res, next) => {
//   for(let key in req.query) {
//     if(typeof req.query[key] === "string") {
//       req.query[key] = req.query[key].toLowerCase();
//     }
//   }
//   next();
// });

bountyRouter.get("/", (req, res) => {
  Bounty.find(req.query, (err, data) => {
    if(err) {
      res.status(500).send({"message":"ERROR within server", err});
    } else if (data === null) {
      res.status(404).send({"message":"ERROR data not found", err});
    } else {
      res.status(200).send({"message":"SUCCESS data returned", data});
    }
  });
});

bountyRouter.post("/", (req, res) => {
  let newBounty = new Bounty(req.body);
  newBounty.save((err, data) => {
    if(err) {
      res.status(500).send({"message":"ERROR within server", err});
    } else {
      res.status(200).send({"message":"SUCCESS data posted", data});
    }
  });
});

bountyRouter.get("/:id", (req, res) => {
  Bounty.findOne({"_id": req.params.id}, (err, data) => {
    if(err) {
      res.status(500).send({"message":"ERROR within server", err});
    } else if (data === null) {
      res.status(404).send({"message":"ERROR data not found"}, err);
    } else {
      res.status(200).send({"message":"SUCCESS data returned", data});
    }
  });
});

//old way to do get by id
// for(let i = 0; i < bountyArr.length; i++) {
//   if(bountyArr[i].id === req.params.id) {
//     res.send(bountyArr[i]);
//     res.status(201).send({"message": "success, data was posted"});
//   }
// }
// return res.status(404).send({
//   message: "error, not found"
// });


bountyRouter.delete("/:id", (req, res) => {
  Bounty.findByIdAndRemove(req.params.id, (err, data) => {
    if(err) {
      res.status(500).send({"message":"ERROR within server", err});
    } else if (data === null) {
      res.status(404).send({"message":"ERROR data not found", err});
    } else {
      res.status(200).send({"message": "SUCCESS, item deleted"});
    }
  });
});
//old way to delete
// for(let i = 0; i < bountyArr.length; i++) {
//   if(bountyArr[i].id === req.params.id) {
//     bountyArr.splice(i, 1);
//     res.status(200).send({"message": "data was deleted"});
//   }
// }
// return res.status(404).send({
//   message: "error not found"
// })

//
bountyRouter.put("/:id", (req,res) => {
  Bounty.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, data) => {
    if(err) {
      res.status(500).send({"message":"ERROR within server", err});
    } else if(data === null) {
      res.status(404).send({"message":"ERROR, data not found", err});
    } else {
      res.status(200).send({"message":"SUCCESS, item updated", data});
    }
  });
});
//old way to do put
// console.log(req.body);
// for(let i = 0; i < bountyArr.length; i++) {
//   if(bountyArr[i].id === req.params.id) {
//     for(let key in req.body) {
//       // console.log(key);
//       //loop through each key in the request body
//       if (bountyArr[i].hasOwnProperty(key)) {
//         //check if current item has a property name of key value
//         bountyArr[i][key] = req.body[key];
//       }
//     };
//     return res.status(200).send({
//       message: "UPDATE SUCCESSFUL"
//     })
//   }
// }
// return res.status(404).send({
//   message: "error not found"
// })

module.exports = bountyRouter;
