const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// ✅ Import your route files here
const authRoutes = require("./routes/auth");
const accountRoutes = require("./routes/account");
const transactionRoutes = require("./routes/transaction");




const app = express(); // ✅ Create express app before using app.use()

app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/banking", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log(err));

// ✅ Link your route files here
app.use("/api/auth", authRoutes);
app.use("/api/account", accountRoutes);
app.use("/api/transactions", transactionRoutes);

app.get("/", (req, res) => {
  res.send("Banking API is Running ✅");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
