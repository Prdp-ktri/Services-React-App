import { useState, useEffect } from "react";
import Header from "./Header";

const AvailServices = () => {
  const IT_SERVICES = [
    "Web Design and Development",
    "Digital Marketing",
    "Software & App Development",
    "IT Consulting & Support",
    "Data Analysis & Business Intelligence",
  ];

  const NON_IT_SERVICES = [
    "Consulting & Coaching",
    "Content Creation & Creative Services",
    "Online Education",
    "Virtual Assistance & Administrative Services",
    "Health & Wellness",
    "E-Commerce & Dropshipping",
    "Event Planning",
    "Specialty Services",
  ];

  const [selectedService, setSelectedService] = useState("");
  const [address, setAddress] = useState("");
  const [timing, setTiming] = useState("");
  const [savedRequests, setSavedRequests] = useState([]);

  // Load saved service requests
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("serviceRequests")) || [];
    setSavedRequests(saved);
  }, []);

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setAddress("");
    setTiming("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedService || !address || !timing) {
      alert("Please fill in all details before saving.");
      return;
    }

    const newRequest = {
      id: Date.now(),
      service: selectedService,
      address,
      timing,
    };

    const updatedRequests = [...savedRequests, newRequest];
    setSavedRequests(updatedRequests);
    localStorage.setItem("serviceRequests", JSON.stringify(updatedRequests));

    alert("Service request saved successfully!");
    setSelectedService("");
    setAddress("");
    setTiming("");
  };

  const handleDelete = (id) => {
    const updated = savedRequests.filter((req) => req.id !== id);
    setSavedRequests(updated);
    localStorage.setItem("serviceRequests", JSON.stringify(updated));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Avail Services
      </h2>

      {/* IT Services */}
      <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-3 text-blue-700">
          IT Services You Can Avail
        </h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {IT_SERVICES.map((service) => (
            <button
              key={service}
              onClick={() => handleServiceSelect(service)}
              className={`p-3 border rounded-lg text-left transition ${
                selectedService === service
                  ? "bg-blue-600 text-white"
                  : "bg-white hover:bg-blue-50"
              }`}
            >
              {service}
            </button>
          ))}
        </div>
      </div>

      {/* Non-IT Services */}
      <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-3 text-blue-700">
          Non-IT Services You Can Avail
        </h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {NON_IT_SERVICES.map((service) => (
            <button
              key={service}
              onClick={() => handleServiceSelect(service)}
              className={`p-3 border rounded-lg text-left transition ${
                selectedService === service
                  ? "bg-blue-600 text-white"
                  : "bg-white hover:bg-blue-50"
              }`}
            >
              {service}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Service Details */}
      {selectedService && (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md space-y-4"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Selected Service:{" "}
            <span className="text-blue-600">{selectedService}</span>
          </h3>

          <label className="block text-sm font-medium text-gray-700">
            Address where service is required:
          </label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter service address"
            className="w-full border rounded-lg p-2"
            required
          />

          <label className="block text-sm font-medium text-gray-700">
            Preferred time for service:
          </label>
          <input
            type="datetime-local"
            value={timing}
            onChange={(e) => setTiming(e.target.value)}
            className="w-full border rounded-lg p-2"
            required
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Save Request
          </button>
        </form>
      )}

      {/* Saved Service Requests */}
      {savedRequests.length > 0 && (
        <div className="bg-gray-50 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">
            Saved Service Requests
          </h3>
          <ul className="space-y-3">
            {savedRequests.map((req) => (
              <li
                key={req.id}
                className="border p-3 rounded-lg bg-white flex justify-between items-start"
              >
                <div>
                  <p className="font-semibold text-blue-700">{req.service}</p>
                  <p className="text-sm text-gray-600 mt-1">
                    <strong>Address:</strong> {req.address}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Timing:</strong>{" "}
                    {new Date(req.timing).toLocaleString()}
                  </p>
                </div>
                <button
                  onClick={() => handleDelete(req.id)}
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
  );
};

export default AvailServices;
