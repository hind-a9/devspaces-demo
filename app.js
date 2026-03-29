const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hello from my DevSpaces project!");
  res.end();
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
