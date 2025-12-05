import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Transfer() {
  const [toAccountNumber, setToAccountNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleTransfer = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      setMessage("Please login again.");
      setTimeout(() => navigate("/login"), 2000);
      return;
    }

    try {
      const res = await axios.post(
        "https://banking-system-nc7o.onrender.com/api/account/transfer",
        {
          toAccountNumber,
          amount: Number(amount),
        },
        {
          headers: { Authorization: token },
        }
      );

      setMessage("Transfer Successful ✔️");

      // Reset form
      setToAccountNumber("");
      setAmount("");

      // Redirect after success
      setTimeout(() => navigate("/dashboard"), 1500);

    } catch (err) {
      setMessage(err.response?.data?.message || "Transfer failed ❌");
    }
  };

  return (
    <>
      <Navbar />

      <div className="container mt-5" style={{ maxWidth: "500px" }}>
        <div className="card p-4 shadow-sm">

          <h3 className="text-center mb-4">💸 Transfer Money</h3>

          <form onSubmit={handleTransfer}>
            <input
              type="text"
              placeholder="Receiver Account Number"
              className="form-control mb-3"
              value={toAccountNumber}
              onChange={(e) => setToAccountNumber(e.target.value)}
              required
            />

            <input
              type="number"
              placeholder="Amount"
              className="form-control mb-3"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />

            <button type="submit" className="btn btn-primary w-100">
              Send Money
            </button>
          </form>

          {message && (
            <p className="mt-3 text-center fw-bold">
              {message}
            </p>
          )}

        </div>
      </div>
    </>
  );
}

export default Transfer;
