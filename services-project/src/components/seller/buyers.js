import React, { useEffect, useState } from "react";
import dummydata from "../buyers/dummydata";
import { toast } from "react-toastify";
import SellerHeader from "./SellerHeader";
import { User, Trash2, Mail, MapPin, Phone } from "lucide-react";

function Buyers() {
  const [buyers, setBuyers] = useState([]);

  useEffect(() => {
    const allBuyers = dummydata.getBuyers();
    setBuyers(allBuyers);
  }, []);

  const deleteBuyer = (email) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this buyer?"
    );
    if (!confirmDelete) return;

    dummydata.deleteBuyer(email);
    const updated = buyers.filter((b) => b.email !== email);
    setBuyers(updated);

    toast.success("Buyer deleted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <SellerHeader />

      <div className="max-w-6xl mx-auto p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          👥 All Registered Buyers
        </h2>

        {buyers.length === 0 ? (
          <p className="text-gray-500 text-lg text-center py-10 bg-white shadow-md rounded-lg">
            No buyers found.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {buyers.map((buyer, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-5 border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
                    <User size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {buyer.name || "Unnamed Buyer"}
                  </h3>
                </div>

                <div className="space-y-2 text-gray-700">
                  {buyer.email && (
                    <p className="flex items-center gap-2">
                      <Mail size={16} className="text-blue-500" />
                      {buyer.email}
                    </p>
                  )}

                  {buyer.phone && (
                    <p className="flex items-center gap-2">
                      <Phone size={16} className="text-green-500" />
                      {buyer.phone}
                    </p>
                  )}

                  {buyer.address && (
                    <p className="flex items-center gap-2">
                      <MapPin size={16} className="text-red-500" />
                      {buyer.address}
                    </p>
                  )}
                </div>

                <div className="mt-5 text-right">
                  <button
                    onClick={() => deleteBuyer(buyer.email)}
                    className="flex items-center gap-2 justify-center w-full bg-red-600 text-white px-3 py-2 rounded-lg font-medium hover:bg-red-700 transition"
                  >
                    <Trash2 size={16} />
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Buyers;
