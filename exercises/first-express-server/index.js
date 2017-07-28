const express = require('express');

const app = express();

//trick - will give code to devops guy. he might change the port. to make sure it will always work use process.env.PORT \\ 8080; env is environment
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.status(200).send({"message":"success on express server"});
});

app.listen(PORT, () => {
  console.log(`Starting server on port ${PORT}`);
});
