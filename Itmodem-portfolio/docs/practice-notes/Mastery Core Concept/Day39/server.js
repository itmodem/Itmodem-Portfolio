import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import User from "./models/User.js";

dotenv.config(); // 

const app = express(); // Middleware..
app.use(express.json());

connectDB(); // Mistakes

app.post("/user", async (req, res) => {
try {
    const user = await User.create(req.body);
    res.status(201).json(user);
} catch (error) {
    res.status(500).json({error: error.message});
}
})

const PORT = process.env.PORT || 5001

app.listen(PORT , () =>{
    console.log(`Server is running on PORT ${PORT}`);
})