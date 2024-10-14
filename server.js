const http = require("http");

const port = process.env.PORT || 6000;

const requestHandler = (req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("hello, world!");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
};

const server = http.createServer(requestHandler);

server.listen(port, () => {
  console.log(
    `Server listening on port ${port} in ${
      process.env.NODE_ENV || "development"
    } mode`
  );
});
