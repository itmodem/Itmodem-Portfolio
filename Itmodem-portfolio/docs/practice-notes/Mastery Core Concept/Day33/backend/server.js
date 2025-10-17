const express = require('express');
const app = express();
app.use(express.static("public")); // JSON body pass karega

app.post('/contact',(req,res) =>{
    console.log(req.body);
    res.send("Form data mil gaya ✅");
})


app.listen(3000, () => {
    console.log("Server chal raha hain: http://localhost:3000 par");
})