const express = require("express");
const router = express.Router();
const Account = require("../models/Account");
const Transaction = require("../models/Transaction");
const jwt = require("jsonwebtoken");

// ✅ Middleware to verify JWT
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

// ✅ 1. Get account balance
router.get("/balance", verifyToken, async (req, res) => {
  try {
    const account = await Account.findOne({ userId: req.user.userId });
    if (!account) return res.status(404).json({ message: "Account not found" });

    res.json({
      accountNumber: account.accountNumber,
      balance: account.balance
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ 2. Fund transfer
router.post("/transfer", verifyToken, async (req, res) => {
  try {
    const { toAccountNumber, amount } = req.body;

    // Check for valid amount
    if (amount <= 0) {
      return res.status(400).json({ message: "Transfer amount must be greater than zero" });
    }

    const fromAccount = await Account.findOne({ userId: req.user.userId });
    const toAccount = await Account.findOne({ accountNumber: toAccountNumber });

    if (!fromAccount || !toAccount)
      return res.status(404).json({ message: "Invalid account details" });

    // 🚫 Prevent self-transfers
    if (fromAccount.accountNumber === toAccountNumber) {
      return res.status(400).json({ message: "Cannot transfer to the same account" });
    }

    if (fromAccount.balance < amount)
      return res.status(400).json({ message: "Insufficient balance" });

    // Deduct and add balances
    fromAccount.balance -= amount;
    toAccount.balance += amount;

    await fromAccount.save();
    await toAccount.save();

    // Record transaction
    await Transaction.create({
      fromAcc: fromAccount.accountNumber,
      toAcc: toAccount.accountNumber,
      amount,
      type: "transfer",
    });

    res.json({ message: "Transfer successful" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/profile", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select("-password");
    const account = await Account.findOne({ userId: req.user.userId });

    res.json({
      name: user.name,
      email: user.email,
      accountNumber: account.accountNumber,
      balance: account.balance,
      joined: user.createdAt,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;
