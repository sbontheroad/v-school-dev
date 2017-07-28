//this is built into node, but you need to import it - makes a server
let http = require("http");
//const can never be changed/redefined - is it always caps?
const PORT = 8080;




//req is request, res is response
let server = http.createServer((req, res) => {
    if(req.method === "GET") {
      res.writeHead(200, {"Content-Type": "text/html"});
      if(req.url === "/") {
          res.write("<h1>this would be my index.html</h1>")
      } else if(req.url === "/blog") {
          res.write("<h1>this would be my blog.html</h1>")
      }
      res.write("<h1>helloooo, is it me you're looking for??</h1>");
      res.end();
    }
});

server.listen(PORT);
