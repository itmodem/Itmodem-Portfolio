// Step 1: Import http
const http = require('http');
// Step 2: Create server
const server = http.createServer((req,res) => {

    // Step 3: Handle Request and Response
    if (req.url === '/') {
        res.write('Welcome to Home page..');
        res.end();
    } else if (req.url === '/about') {
        res.write('Welcome to about page...');
        res.end();
    } else {
        res.write('404 Error Page nahi mila');
    }
})

server.listen(3000, () => {
    console.log('Server is running on : http://localhost:3000');
})