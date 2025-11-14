const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  accountNumber: {
    type: String,
    unique: true,
    required: true
  },
  balance: {
    type: Number,
    default: 1000
  }
});

module.exports = mongoose.model("Account", accountSchema);
