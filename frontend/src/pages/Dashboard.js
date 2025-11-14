import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [account, setAccount] = useState({});
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    axios
      .get("http://localhost:5000/api/account/balance", {
        headers: { Authorization: token },
      })
      .then((res) => setAccount(res.data))
      .catch((err) => setMessage("Error loading account details"));
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="d-flex justify-content-center mt-5">
  <div className="card p-4 shadow" 
       style={{ width: "70%", maxWidth: "900px", borderRadius: "12px" }}>
    
    <h2 className="text-center mb-4">
      🏦 My Dashboard
    </h2>

    <p><strong>Account Number:</strong> {account.accountNumber}</p>
    <p><strong>Current Balance:</strong> ₹{account.balance}</p>

    {/* BUTTONS */}
    <div className="container mt-4">

      <div className="d-flex justify-content-center flex-wrap gap-4 mb-3">
        <button className="btn btn-success px-4 py-3" style={{ width: "220px" }}
          onClick={() => navigate("/transfer")}>
          Transfer Funds
        </button>

        <button className="btn btn-info px-4 py-3" style={{ width: "220px" }}
          onClick={() => navigate("/transactions")}>
          View Transactions
        </button>

      

        <button className="btn btn-danger px-4 py-3" style={{ width: "220px" }}
          onClick={logout}>
          Logout
        </button>
      </div>

    </div>

  </div>
</div>

  );
}

export default Dashboard;
