import React, { useState } from "react";
import { toast } from "react-toastify";
import SellerHeader from "./SellerHeader";
import { Edit3, Save, User } from "lucide-react";
import SellerFooter from "./SellerFooter";

function SellerManageProfile() {
  // Dummy seller details
  const [seller, setSeller] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1 555 234 7890",
    businessName: "Doe Services Co.",
    address: "123 Main Street, Los Angeles, CA",
    description:
      "We provide top-quality home repair and renovation services with over 10 years of experience.",
    profilePic: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", // placeholder avatar
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(seller);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setSeller(editedData);
    setIsEditing(false);
    toast.success("Profile updated successfully!");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/seller-services.png')" }}
    >
      <SellerHeader />

      <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-2xl shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            <User className="text-blue-600" size={30} />
            Seller Profile
          </h2>

          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium shadow-md transition"
            >
              <Edit3 size={18} />
              Edit Profile
            </button>
          ) : (
            <button
              onClick={handleSave}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium shadow-md transition"
            >
              <Save size={18} />
              Save Changes
            </button>
          )}
        </div>

        {/* Profile Picture */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={seller.profilePic}
            alt="Profile"
            className="w-28 h-28 rounded-full shadow-md mb-3 border border-gray-300 object-cover"
          />
          {isEditing && (
            <input
              type="text"
              name="profilePic"
              value={editedData.profilePic}
              onChange={handleChange}
              placeholder="Profile image URL"
              className="border border-gray-300 rounded-lg px-3 py-2 w-full max-w-md focus:ring-2 focus:ring-blue-400 outline-none"
            />
          )}
        </div>

        {/* Profile Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { label: "Full Name", name: "name" },
            { label: "Email Address", name: "email" },
            { label: "Phone Number", name: "phone" },
            { label: "Business Name", name: "businessName" },
            { label: "Address", name: "address" },
          ].map((field) => (
            <div key={field.name}>
              <label className="block text-gray-700 font-semibold mb-1">
                {field.label}
              </label>
              {isEditing ? (
                <input
                  type="text"
                  name={field.name}
                  value={editedData[field.name]}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-400 outline-none"
                />
              ) : (
                <p className="text-gray-800 bg-gray-50 px-3 py-2 rounded-lg border border-gray-200">
                  {seller[field.name]}
                </p>
              )}
            </div>
          ))}

          {/* Description Field (Full Width) */}
          <div className="sm:col-span-2">
            <label className="block text-gray-700 font-semibold mb-1">
              Business Description
            </label>
            {isEditing ? (
              <textarea
                name="description"
                value={editedData.description}
                onChange={handleChange}
                rows="3"
                className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-400 outline-none"
              />
            ) : (
              <p className="text-gray-800 bg-gray-50 px-3 py-2 rounded-lg border border-gray-200">
                {seller.description}
              </p>
            )}
          </div>
        </div>
      </div>
      <div>
        <SellerFooter />
      </div>
    </div>
  );
}

export default SellerManageProfile;
