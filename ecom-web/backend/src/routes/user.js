const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/signin", (req, res) => {});
// router.post("/signup", (req, res) => {
//   User.findOne({ email: req.body.email }).exec((error, user) => {
//     if (user) {
//       return res.status(400).json({
//         message: "User already registered",
//       });
//     }
//     const { firstName, lastName, email, password } = req.body;
//     const _user = new User({
//       firstName,
//       lastName,
//       email,
//       password,
//       userName: Math.random().toString(),
//     });
//     _user.save((error, data) => {
//       if (error) {
//         return res.status(400).json({
//           message: "Something went wrong",
//         });
//       }
//       if (data) {
//         return res.status(201).json({
//           user: data,
//         });
//       }
//     });
//   });
// });
router.post("/signup", async (req, res) => {
    try {
      const { firstName, lastName, email, password } = req.body;
  
      // Validate request body
      if (!firstName || !lastName || !email || !password) {
        return res.status(400).json({ message: "All fields are required." });
      }
  
      // Check if the user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "User already registered." });
      }
  
      // Create a new user
      const newUser = new User({
        firstName,
        lastName,
        email,
        username: Math.random().toString(36).substring(2, 15), // Generate random username
      });
  
      // Use the virtual setter to hash the password
      newUser.password = password;
  
      // Save the user
      const savedUser = await newUser.save();
      return res.status(201).json({ user: savedUser });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Something went wrong." });
    }
  });
  
  module.exports = router;

module.exports = router;
