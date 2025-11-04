import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function BuyerLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", name: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const savedUsers = JSON.parse(localStorage.getItem("buyers")) || [];
    const userExists = savedUsers.find(
      (buyer) =>
        buyer.email === formData.email && buyer.password === formData.password
    );
    if (userExists) {
      navigate("/buyer-dashboard");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-lg w-80">
        <h2 className="text-2xl font-semibold mb-4 text-center">Buyer Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            id=""
            placeholder="Enter your email"
            className="w-full border rounded-lg p-2"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            id=""
            className="w-full border rounded-lg p-2"
            required
          />
          <button type="submit">Login</button>
        </form>
        <p className="text-sm text-center mt-3">
          Don't have an account?
          <Link to="/create-buyer" className="text-blue-600 hover:underline">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}

export default BuyerLogin;
