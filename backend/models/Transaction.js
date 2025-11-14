const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  fromAcc: {
    type: String,
    required: true
  },
  toAcc: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    enum: ["credit", "debit", "transfer"],
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Transaction", transactionSchema);
