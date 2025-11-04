import { useState } from "react";
import Header from "./Header";
import AvailServices from "./AvailServices";
import ManageProfile from "./ManageProfile";

const BuyerDashboard = () => {
  const [activeTab, setActiveTab] = useState("services");

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="max-w-5xl mx-auto p-6">
        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={() => setActiveTab("services")}
            className={`px-4 py-2 rounded-lg font-semibold ${
              activeTab === "services"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 border"
            }`}
          >
            Avail Services
          </button>
          <button
            onClick={() => setActiveTab("profile")}
            className={`px-4 py-2 rounded-lg font-semibold ${
              activeTab === "profile"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 border"
            }`}
          >
            Manage Profile
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          {activeTab === "services" ? <AvailServices /> : <ManageProfile />}
        </div>
      </div>
    </div>
  );
};

export default BuyerDashboard;
