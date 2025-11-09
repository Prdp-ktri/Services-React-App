import { useState } from "react";
import Header from "./Header";
import AvailServices from "./AvailServices";
import ManageProfile from "./ManageProfile";
import Footer from "./Footer";

const BuyerDashboard = () => {
  const [activeTab, setActiveTab] = useState("services");

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/services.jpg')" }}
    >
      {/* Tint overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen">
        <Header />

        <div className="max-w-5xl mx-auto p-6">
          {/* Tabs */}
          <div className="flex justify-center space-x-4 mb-6">
            <button
              onClick={() => setActiveTab("services")}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === "services"
                  ? "bg-orange-500 text-white shadow-lg scale-105"
                  : "bg-white text-gray-800 border hover:bg-gray-100"
              }`}
            >
              Avail Services
            </button>

            <button
              onClick={() => setActiveTab("profile")}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === "profile"
                  ? "bg-orange-500 text-white shadow-lg scale-105"
                  : "bg-white text-gray-800 border hover:bg-gray-100"
              }`}
            >
              Manage Profile
            </button>
          </div>

          {/* Card Section */}
          <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-2xl">
            {activeTab === "services" ? <AvailServices /> : <ManageProfile />}
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default BuyerDashboard;
