const fs = require('fs');

// fs.writeFileSync("demo.txt", "Bhai Node.js mast hain mujhe maja aa raha hain sikhne main");

// fs.appendFileSync("demo.txt", "\nAur mujhe maja aa raha hain.");

fs.unlinkSync("demo.txt");

console.log("File hata di gai");

const data = fs.readFileSync("demo.txt", "utf8");

console.log("File ka data:", data)