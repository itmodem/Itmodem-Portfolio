// Step 1: Practice
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import User
 from "./models/User.js";
dotenv.config();

const app = express();
app.use(express.json());

// MongoDB se connect ho jao
connectDB();

// Step 2: Practice
// Route: User create karne ke liye
app.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Step 3: Practice
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT} 🔥`);
});

// import express from "express";
// import dotenv from "dotenv";
// import connectDB from "./config/db.js";
// import User from "./models/user.js";

// dotenv.config();
// const app = express();
// app.use(express.json()); // JSON body parase karne ke lie

// app.post("/users", async (req,res) =>{
//   try {
//     const user = await User.create(req.body);
//     res.status(201).json(user);
//   } catch (error) {
//     res.status(500).json({Error: err.message});
//   }
// })

// const PORT = process.env.PORT || 5000
// app.listen(PORT, () =>{
//   console.log(`Server is running on port ${PORT} 🔥`);
// });
