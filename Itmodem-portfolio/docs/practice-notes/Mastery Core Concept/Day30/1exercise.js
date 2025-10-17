const http = require("http");
const fs = require("fs");
const path = require("path");

// 🔹 1. Log file ka path
const logFile = path.join(__dirname, "server.log");

// 🔹 2. Log request ko file me save karne ka function
function logRequest(req) {
  const logEntry = `${new Date().toISOString()} | ${req.method} | ${req.url}\n`;
  fs.appendFile(logFile, logEntry, (err) => {
    if (err) console.log("Log likhne me error aaya 😢");
  });
}

// 🔹 3. Routes handle karne ka function
function handleRoutes(req, res) {
  if (req.url === "/") {
    sendResponse(res, 200, "text/html", "<h1>Welcome Bhai! Ye hai Home Page 🏠</h1>");
  } else if (req.url === "/about") {
    sendResponse(res, 200, "text/html", "<h1>About Page: Ye custom server Node.js se bana hai 🚀</h1>");
  } else if (req.url === "/api") {
    const data = { name: "It Modem", role: "Backend Master" };
    sendResponse(res, 200, "application/json", JSON.stringify(data));
  } else {
    sendResponse(res, 404, "text/html", "<h1>404 - Page Not Found 😢</h1>");
  }
}

// 🔹 4. Response bhejne ka common function
function sendResponse(res, statusCode, contentType, content) {
  res.writeHead(statusCode, { "Content-Type": contentType });
  res.end(content);
}

// 🔹 5. Server create karna
const server = http.createServer((req, res) => {
  logRequest(req);     // Har request ko log kar
  handleRoutes(req, res); // Route ke hisaab se response bhej
});

// 🔹 6. Server listen
server.listen(3000, () => {
  console.log("Server chal raha hai http://localhost:3000 par 🔥");
});
