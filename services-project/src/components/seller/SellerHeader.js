import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react"; // optional icon (from lucide-react)

function SellerHeader() {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      localStorage.removeItem("seller");
      navigate("/seller-login");
    }
  };

  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo / Brand */}
        <div
          onClick={() => navigate("/seller-dashboard")}
          className="cursor-pointer text-2xl font-extrabold tracking-wide hover:scale-105 transition-transform"
        >
          Seller<span className="text-yellow-300">Zone</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-8 text-lg font-medium">
          <Link
            to="/add-service"
            className="relative group hover:text-yellow-300 transition"
          >
            Add Service
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 group-hover:w-full transition-all"></span>
          </Link>

          <Link
            to="/buyers"
            className="relative group hover:text-yellow-300 transition"
          >
            All Buyers
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 group-hover:w-full transition-all"></span>
          </Link>

          <Link
            to="/seller-manage-profile"
            className="relative group hover:text-yellow-300 transition"
          >
            Manage Profile
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 group-hover:w-full transition-all"></span>
          </Link>
        </nav>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-semibold shadow-md transition-all duration-200"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </header>
  );
}

export default SellerHeader;
