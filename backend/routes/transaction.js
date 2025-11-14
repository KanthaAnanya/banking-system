const express = require("express");
const router = express.Router();
const Transaction = require("../models/Transaction");
const Account = require("../models/Account");
const jwt = require("jsonwebtoken");

// Middleware to verify token
function verifyToken(req, res, next) {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: "Access denied" });

  try {
    const verified = jwt.verify(token, "secretkey123");
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid token" });
  }
}

// ✅ Get transaction history for logged-in user
router.get("/history", verifyToken, async (req, res) => {
  try {
    const account = await Account.findOne({ userId: req.user.userId });
    if (!account) return res.status(404).json({ message: "Account not found" });

    const transactions = await Transaction.find({
      $or: [
        { fromAcc: account.accountNumber },
        { toAcc: account.accountNumber }
      ]
    }).sort({ timestamp: -1 });

    res.json({ transactions });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
