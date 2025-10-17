const express = require('express');
const app = express();
app.use(express.json());

app.get('/user', (req, res) => {
    res.send("Get all users");
})

app.post('/users', (req, res) => {
    res.send("Create user");
})

app.listen(5000, () => {
    console.log("Server is running on http://localhost:5000");
})