import React from "react";
import { useNavigate } from "react-router-dom";
import SellerHeader from "./SellerHeader";
import AddService from "./AddService";
import Buyers from "./buyers";

function SellerDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      <SellerHeader />

      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Welcome, Seller 👋
        </h2>

        {/* Dashboard Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Add Service Card */}
          <div className="bg-white shadow-lg rounded-2xl p-5 border border-gray-200 hover:shadow-xl transition">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-blue-700">
                Add a New Service
              </h3>
              <button
                onClick={() => navigate("/add-service")}
                className="text-sm text-blue-600 underline hover:text-blue-800"
              >
                View Full Page
              </button>
            </div>
            <AddService />
          </div>

          {/* Buyers Card */}
          <div className="bg-white shadow-lg rounded-2xl p-5 border border-gray-200 hover:shadow-xl transition">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-blue-700">
                All Buyers
              </h3>
              <button
                onClick={() => navigate("/buyers")}
                className="text-sm text-blue-600 underline hover:text-blue-800"
              >
                View Full Page
              </button>
            </div>
            <div className="max-h-96 overflow-y-auto">
              <Buyers />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellerDashboard;
