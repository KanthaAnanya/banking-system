const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Account = require("../models/Account");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const verifyToken = require("../middleware/auth");




// ✅ REGISTER route
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create new user
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    // create associated account
    const accountNumber = Math.floor(1000000000 + Math.random() * 9000000000).toString();
    const newAccount = new Account({ userId: newUser._id, accountNumber });
    await newAccount.save();

    res.status(201).json({ message: "User registered successfully", accountNumber });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ LOGIN route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // find user
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    // compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // create JWT token
    const token = jwt.sign({ userId: user._id }, "secretkey123", { expiresIn: "2h" });

    res.json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.get("/profile", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select("-password");
    const account = await Account.findOne({ userId: req.user.userId });

    if (!user || !account) {
      return res.status(404).json({ message: "User or account not found" });
    }

    res.json({
      name: user.name,
      email: user.email,
      accountNumber: account.accountNumber,
      balance: account.balance,
      joined: user.createdAt    // <--- This was missing!
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;
