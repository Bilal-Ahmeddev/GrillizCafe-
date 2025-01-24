const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
};


// Register User
exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user in the database
    const user = await User.create({ name, email, password: hashedPassword });

    // Respond with a success message
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error); // Log any errors for debugging
    res.status(500).json({ message: "Server Error" });
  }
};

// Login User
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    // Check if the user exists and the password matches
    if (user && (await bcrypt.compare(password, user.password))) {
      // Generate JWT token
      const token = generateToken(user._id);

      // Send the token back to the user
      res.json({ token });
    } else {
      // Respond with error if the credentials are invalid
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    console.error(error); // Log any errors for debugging
    res.status(500).json({ message: "Server Error" });
  }
};

// Get Profile
exports.getProfile = async (req, res) => {
  try {
    // Send the user's profile data (assuming the user is already authenticated)
    res.json(req.user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
