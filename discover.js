const bonjour = require("bonjour")();

// Discover all services
bonjour.find({}, function (service) {
  console.log("Found a service:", service);
});

// Keep the process running to continuously discover services
process.stdin.resume();
