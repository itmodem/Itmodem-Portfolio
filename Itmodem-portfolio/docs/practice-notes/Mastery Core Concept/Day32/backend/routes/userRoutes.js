const express = require("express");
const router = express.Router();

// GET all users
router.get("/", (req, res) => {
  res.send("Bhai, ye sabhi users ki list hai 📃");
});

// GET single user
router.get("/:id", (req, res) => {
  res.send(`Bhai, ye user hai jiska ID: ${req.params.id}`);
});

// POST (new user)
router.post("/", (req, res) => {
  res.send("Naya user create ho gaya ✅");
});

// PUT (update user)
router.put("/:id", (req, res) => {
  res.send(`User update ho gaya ID: ${req.params.id} ke liye ✏️`);
});

// DELETE (remove user)
router.delete("/:id", (req, res) => {
  res.send(`User delete ho gaya ID: ${req.params.id} ke liye ❌`);
});

module.exports = router;
