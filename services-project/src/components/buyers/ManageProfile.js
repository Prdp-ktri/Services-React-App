import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "./Header";
import dummydata from "./dummydata";
import Footer from "./Footer";

const ManageProfile = () => {
  const [buyer, setBuyer] = useState({});
  const [editable, setEditable] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Assuming current logged-in buyer is identified by email
    const buyers = dummydata.getBuyers();
    const currentBuyer = buyers[buyers.length - 1] || null; // last created buyer (for now)
    setBuyer(currentBuyer);
  }, []);

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (!buyer) return;
    dummydata.updateBuyer(buyer);
    toast.success("Profile updated successfully!");
    setEditable(false);
    navigate("/buyer-dashboard");
  };

  const deleteProfile = () => {
    if (!buyer) return;

    const confirmDelete = window.confirm(
      "Are you sure you want to delete the buyers' profile?"
    );
    if (!confirmDelete) return;

    dummydata.deleteBuyer(buyer.email);
    setBuyer(null);
    toast.success("Profile deleted successfully!");
    navigate("/");
  };

  if (!buyer)
    return (
      <div className="flex justify-center items-center min-h-screen text-lg font-semibold">
        No profile found!
      </div>
    );

  return (
    <div
      className="min-h-screen bg-cover bg-center relative flex flex-col"
      style={{ backgroundImage: "url('/images/profile.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 flex-1 px-8 py-6">
        <Header />
        <h2 className="text-3xl font-bold mb-6 text-white text-center">
          Manage Profile
        </h2>

        <div className="space-y-4 bg-white p-6 rounded-xl shadow-lg max-w-lg mx-auto">
          {Object.keys(buyer).map((key) => (
            <div key={key}>
              <label className="font-semibold capitalize block mb-1">
                {key}:
              </label>
              <input
                type="text"
                name={key}
                value={buyer[key] || ""}
                onChange={handleChange}
                disabled={!editable}
                className={`w-full border p-2 rounded-lg ${
                  editable ? "bg-white" : "bg-gray-100"
                }`}
              />
            </div>
          ))}

          <div className="flex justify-between mt-6">
            {editable ? (
              <button
                onClick={handleSave}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => setEditable(true)}
                className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Edit Profile
              </button>
            )}

            <button
              onClick={deleteProfile}
              className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ManageProfile;
