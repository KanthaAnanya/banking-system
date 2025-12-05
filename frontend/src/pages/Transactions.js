import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    axios
      .get("https://banking-system-nc7o.onrender.com/api/transactions/history", {
        headers: { Authorization: token },
      })
      .then((res) => {
        setTransactions(res.data.transactions);
      })
      .catch((err) => {
        setMessage("Failed to fetch transactions");
      });
  }, [navigate]);

  return (
    <div className="container mt-5" style={{ maxWidth: "800px" }}>
      <div className="card p-4 shadow-sm">
        <h3 className="text-center mb-4">📜 Transaction History</h3>

        {message && <p className="text-danger text-center">{message}</p>}

        {transactions.length === 0 ? (
          <p className="text-center text-secondary">No transactions found.</p>
        ) : (
          <div className="table-responsive">
            <table className="table table-striped table-bordered text-center">
              <thead className="table-dark">
                <tr>
                  <th>Date</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Amount (₹)</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((txn) => (
                  <tr key={txn._id}>
                    <td>{new Date(txn.timestamp).toLocaleString()}</td>
                    <td>{txn.fromAcc}</td>
                    <td>{txn.toAcc}</td>
                    <td>{txn.amount}</td>
                    <td>{txn.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <button
          className="btn btn-secondary w-100 mt-3"
          onClick={() => navigate("/dashboard")}
        >
          ← Back to Dashboard
        </button>
      </div>
    </div>
  );
}

export default Transactions;
