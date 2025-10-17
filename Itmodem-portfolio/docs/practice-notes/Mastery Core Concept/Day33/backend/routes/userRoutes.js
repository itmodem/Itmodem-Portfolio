const express = require('express');
const router = express.Router();

router.get('/',(req,res) =>{
    res.send("Bhai, Ye sabhi user ki list hain..");
})

router.get('/:id',(req,res) =>{
    res.send(`Bhai, Ye user id hain jiska: ${req.params.id}`);
})

router.post('/',(req,res) =>{
    res.send("New user create hou ✅");
})

router.put('/:id',(req,res) =>{
    res.send(`User update ho gaya ID: ${req.params.id}`);
})

router.delete('/:id',(req,res) =>{
    res.send(`User delete ho gaya: ${req.params.id}`);
})
module.exports = router;