const express = require('express');
const  app = express();
app.use(express.json());

app.get('/users',(req,res) =>{
    res.json([{id: 1, name:"Rupesh", role:"Developer"}, {id:2, name:"Rahul", role:"Developer"}]);
})

app.listen(3000,() =>{
    console.log("Rest APIs is chal rahi hain : http://localhost:3000 par");
})