import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "toastify";
import Header from "./Header";

const ManageProfile = () => {
  const [buyer, setBuyer] = useState({});
  const [editable, setEditable] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Assuming current logged-in buyer is identified by email
    const buyers = JSON.parse(localStorage.getItem("buyers")) || [];
    const currentBuyer = buyers[buyers.length - 1]; // last created buyer (for now)
    setBuyer(currentBuyer);
  }, []);

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const buyers = JSON.parse(localStorage.getItem("buyers")) || [];
    const updated = buyers.map((b) => (b.email === buyer.email ? buyer : b));
    localStorage.setItem("buyers", JSON.stringify(updated));
    toast("Profile updated successfully!");
    setEditable(false);
    navigate("/buyer-dashboard");
  };

  const deleteProfile = (e) => {
    e.preventDefault();
  };

  if (!buyer) return <p>No profile found!</p>;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Manage Profile</h2>

      <div className="space-y-4">
        {Object.keys(buyer).map((key) => (
          <div key={key}>
            <label className="font-semibold capitalize">{key}:</label>
            <input
              type="text"
              name={key}
              value={buyer[key] || ""}
              onChange={handleChange}
              disabled={!editable}
              className="w-half border p-2 rounded-lg mt-1"
            />
          </div>
        ))}

        {editable ? (
          <button
            onClick={handleSave}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Save Changes
          </button>
        ) : (
          <button
            onClick={() => setEditable(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Edit Profile
          </button>
        )}

        <button
          onClick={deleteProfile}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ManageProfile;
