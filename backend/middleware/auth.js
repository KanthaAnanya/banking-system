const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, "secretkey123");
    req.user = decoded; // contains userId
    next();
  } catch (err) {
    return res.status(400).json({ message: "Invalid token" });
  }
};
