const bonjour = require("bonjour")();
const http = require("http");

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.end("Hello from my Bonjour-advertised server!");
});

// Start server on a random port
server.listen(() => {
  const port = server.address().port;

  // Advertise the HTTP service using Bonjour
  bonjour.publish({
    name: "My HTTP Server",
    type: "http",
    port: port,
  });

  console.log(`HTTP server running and advertised on port ${port}`);
});
