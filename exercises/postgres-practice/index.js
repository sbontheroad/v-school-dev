let pg = require('pg');
let client = new pg.Client();
client.connect();

//READ
client.query("SELECT * FROM Food", (err, result) => {
  if(err) {
    console.log("error", err);
  } else {
    console.log("success");
    console.log(result.rows);
    client.end();
  }
});

//create
// client.query(`INSERT INTO Food (name, price, quality) VALUES ($1, $2, $3)`, ["Fish", 20, "Good"], (err, result) => {
//     if(err) {
//       console.log("Error", err);
//     } else {
//       console.log("Success data was inserted into database");
//       client.end();
//     }
// });

//update
// client.query("UPDATE Food SET name=$1, price=$2, quality=$3 WHERE name=$4", ["Kale", 40, "crappy", "Fish"], (err, result) => {
//   if(err) {
//     console.log("Error", err);
//   } else {
//     console.log("Success data was inserted into database");
//     client.end();
//   }
// });

//delete
// client.query("DELETE FROM Food WHERE name=$1", ["Kale"], (err, result) => {
//   if(err) {
//     console.log("Error", err);
//   } else {
//     console.log("Success data was deleted into database");
//     client.end();
//   }
// });
