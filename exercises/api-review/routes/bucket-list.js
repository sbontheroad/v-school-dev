let express = require('express');
let bucketListRouter = express.Router();
const uuid = require('uuid/v1');

let bucketList = [
  {
    _id: uuid(),
    image: "tewst",
    title: "Mongolia",
    desc: "adf"
  },
  {
    _id: uuid(),
    image: "tewst",
    title: "Mongolia",
    desc: "adf"
  },
  {
    _id: uuid(),
    image: "tewst",
    title: "sdf",
    desc: "adf"
  }
]

// bucketlist
bucketListRouter.route("/")
  .get((req, res) => {
    // console.log(req.query);
      // res.send(bucketList);
    //we want to send back the filtered array
    res.send(bucketList.filter((item) => {
      for(let key in req.query) {
        if(req.query[key] != item[key]) return false;
      }
      return true;
    }));
    return res.status(200).send({"message":"SUCCESS, data returned"})
  })

  .post((req, res) => {
    let template ={
      image: "tewst",
      title: "Mongolia",
      desc: "adf"
    };
    //check req.body for extraneous properties and exclude them
    for(let key in req.body) {
      if(!template.hasOwnProperty(key)) {
        continue;
      } else {
        template[key] = req.body[key];
      }
    }
    req.body._id = uuid();
    bucketList.push(template);
    return res.send({
      "message": "SUCCESS, data posted"
    })
  })

  bucketListRouter.route("/:id")
    .get((req, res) => {
      for(let i = 0; i < bucketList.length; i++) {
        if(bucketList[i]._id === req.params.id) {
          return res.send(bucketList[i]);
        }
      }
      return res.send({"message": "not found"});
    })
    .delete((req, res) => {
      for(let i = 0; i < bucketList.length; i++) {
        if(bucketList[i]._id === req.params.id) {
          bucketList.splice(i, 1);
          return res.status(200).send({
            message: "SUCCESS, item removed"
          })
        }
      }
    })
    .put((req, res) => {
      for(let i = 0; i < bucketList.length; i++) {
        if(bucketList[i]._id === req.params.id) {
          for(let key in req.body) {
            if(bucketList[i].hasOwnProperty(key)) {
              bucketList[i][key] = req.body[key];
            }
          }
          return res.status(200).send({
            message: "SUCCESS, data updated"
          })
        }
      }
    })




// bucketListRouter.route("/:id")

module.exports = bucketListRouter;
