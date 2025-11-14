import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/auth/profile", {
          headers: { Authorization: token },
        });

        setUser(res.data);
        console.log("PROFILE DATA:", res.data);

      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);   // 🔥 FIX
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <h2 className="text-center mt-5">Loading...</h2>;

  if (!user)
    return <h2 className="text-center mt-5">Failed to load profile ❌</h2>;

  return (
    <>
      <Navbar />

      <div className="container mt-5" style={{ maxWidth: "600px" }}>
        <div className="card shadow p-4">
          <h2 className="text-center mb-4"> Profile</h2>

          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Account Number:</strong> {user.accountNumber}</p>
          <p><strong>Balance:</strong> ₹{user.balance}</p>
          <p><strong>Joined:</strong> 
            {user.joined ? new Date(user.joined).toLocaleDateString() : "Not available"}
          </p>
        </div>
      </div>
    </>
  );
}

export default Profile;
