import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
        try {
      const res = await axios.post(
        "https://banking-system-nc7o.onrender.com/api/auth/register",
        { name, email, password }
      );

      setIsError(false);
      setMessage(res.data.message + " | Account No: " + res.data.accountNumber);

      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      console.error("Register error:", err);
      const msg =
        err?.response?.data?.message ||
        err?.message ||
        "Registration failed";
      setIsError(true);
      setMessage(msg);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h3 className="text-center mb-4">Register</h3>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Name"
          className="form-control mb-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="form-control mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="form-control mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary w-100">Register</button>
      </form>
      <p
  className={`mt-3 text-center ${
    message ? (isError ? "text-danger" : "text-success") : ""
  }`}
>
  {message}
</p>

      <p className="text-center mt-2">
        Already have an account?{" "}
        <span
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => navigate("/login")}
        >
          Login
        </span>
      </p>
    </div>
  );
}

export default Register;
