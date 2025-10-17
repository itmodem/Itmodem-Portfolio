const express = require("express");
const app = express();

// Router import karna
const userRoutes = require("./routes/userRoutes");

app.use("/users", userRoutes);

app.listen(3000, () => {
  console.log("Server chal raha hai http://localhost:3000 par 🔥");
});
