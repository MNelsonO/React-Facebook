const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// REGISTER ROUTE
router.post("/register", async (req, res) => {
  try {
    // Generate a salt and hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create a new user with the hashed password
    const newUser = new User({
      username: req.body.username,  // getting username from request
      email: req.body.email,        // getting email from request
      password: hashedPassword,     // storing hashed password
    });

    // Save the user in the database
    const savedUser = await newUser.save();

    // Log the saved user to check what's being stored
    console.log(savedUser);

    // Send a structured response to confirm all fields
    res.status(200).json({
      message: "User successfully registered",
      user: savedUser,  // return the whole user data
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// TEST ROUTE
router.get("/", (req, res) => {
  res.send("Hey, it's auth route");
});

// LOGIN ROUTE
router.post("/login", async (req, res) => {
  try {
    // Find the user by email
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json("User not found");
    }

    // Validate the password
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
      return res.status(400).json("Wrong password");
    }

    // Successful login
    res.status(200).json({
      message: "Login successful",
      user: user,  // returning the user object
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
