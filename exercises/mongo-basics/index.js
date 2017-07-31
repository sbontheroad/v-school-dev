let mongodb = require('mongodb');
//interface to application
let MongoClient = mongodb.MongoClient;

//url to connect to database.  using in place of http, mongo version.  27017 is the default port for mongodb
let url = "mongodb://localhost:27017/bucketList";


//597fb1fd4e2b392993a80985

//connect to db take the url and a callback function
MongoClient.connect(url, (err, db) => {
  if(err) {
    console.log("ERROR in running mongodb", err);
  } else {
    console.log("SUCCESS in connecting to kickass database");
    //connect to the bucketList collection
    let bucketList = db.collection("bucketList");
    //if you want to find everything, use curly braces
    bucketList.find({}).toArray((err, data) => {
      if(err) {
        console.log(err);
      } else {
        console.log(data);
        db.close();
      }
    });
    //insert an item
    // bucketList.insertOne({title: "Sail the caribbean", desc: "spend 1 - 3 months sailing after a course"}, (err, result) => {
    //   if(err) {
    //     console.log(err);
    //   } else {
    //     console.log(result);
    //   }
    // });
    // bucketList.deleteOne({_id:new mongodb.ObjectID("597fb1fd4e2b392993a80985")}, (err, result) => {
    //   if(err) {
    //     console.log(err);
    //   } else {
    //     console.log(result);
    //   }
    // });
    // bucketList.updateOne({_id: new mongodb.ObjectID("597f9e026b68b4b0010fa6ea")}, {$set: {title: "new title"}}, (err, result) => {
    //   if(err) {
    //     console.log(err);
    //   } else {
    //     console.log(result);
    //   }
    // })
  }
});
