import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import SellerHeader from "./SellerHeader";

function AddService() {
  const [formData, setFormData] = useState({
    name: "",
    category: "IT",
    description: "",
    price: "",
  });

  const [services, setServices] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("addedServices")) || [];
    setServices(stored);
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.description || !formData.price) {
      toast.error("Please fill in all fields!");
      return;
    }

    const newService = {
      id: Date.now(),
      ...formData,
    };

    const updated = [...services, newService];
    setServices(updated);
    localStorage.setItem("addedServices", JSON.stringify(updated));

    toast.success("Service added successfully!");
    setFormData({ name: "", category: "IT", description: "", price: "" });
  };

  const handleDelete = (id) => {
    const updated = services.filter((s) => s.id !== id);
    setServices(updated);
    localStorage.setItem("addedServices", JSON.stringify(updated));
    toast.info("Service deleted!");
  };

  return (
    <div>
      <SellerHeader />
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Add New Service
        </h2>

        {/* Service Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="font-medium text-gray-700">Service Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter service name"
              className="w-full border rounded-lg p-2 mt-1"
            />
          </div>

          <div>
            <label className="font-medium text-gray-700">Category:</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 mt-1"
            >
              <option value="IT">IT</option>
              <option value="Non-IT">Non-IT</option>
            </select>
          </div>

          <div>
            <label className="font-medium text-gray-700">Description:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter service description"
              className="w-full border rounded-lg p-2 mt-1"
            />
          </div>

          <div>
            <label className="font-medium text-gray-700">Price (₹):</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter price"
              className="w-full border rounded-lg p-2 mt-1"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add Service
          </button>
        </form>

        {/* Added Services List */}
        {services.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Your Added Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li
                  key={s.id}
                  className="border p-3 rounded-lg flex justify-between items-start bg-gray-50"
                >
                  <div>
                    <p className="font-semibold text-blue-700">{s.name}</p>
                    <p className="text-sm text-gray-600">
                      Category: {s.category}
                    </p>
                    <p className="text-sm text-gray-600">Price: ₹{s.price}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      {s.description}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDelete(s.id)}
                    className="text-red-600 hover:text-red-800 font-semibold"
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddService;
