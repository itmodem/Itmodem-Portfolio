const express = require('express');
const app = express();
app.get('/products',(req,res) =>{
    const {category, price} = req.query;
    res.send(`Category: ${category} , price less then ${price}`);
})

app.listen(3000,() =>{
    console.log("Server is running on http://localhost:3000");
})