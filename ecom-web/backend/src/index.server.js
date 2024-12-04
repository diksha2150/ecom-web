const bodyParser = require("body-parser");
const env = require("dotenv");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");

// Load environment variables
env.config();

// Middleware
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB successfully!");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
app.use("/api", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
