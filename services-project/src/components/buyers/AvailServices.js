import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

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

  const addedServices = JSON.parse(localStorage.getItem("addedServices")) || [];

  const [selectedService, setSelectedService] = useState("");
  const [address, setAddress] = useState("");
  const [timing, setTiming] = useState("");
  const [savedRequests, setSavedRequests] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

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

    if (editMode) {
      const updatedRequests = savedRequests.map((req) =>
        req.id === editId
          ? { ...req, service: selectedService, address, timing }
          : req
      );

      setSavedRequests(updatedRequests);
      localStorage.setItem("serviceRequests", JSON.stringify(updatedRequests));

      alert("Service request updated successfully!");
      setEditMode(false);
      setEditId(null);
    } else {
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
    }
  };

  const handleEdit = (req) => {
    setSelectedService(req.service);
    setAddress(req.address);
    setTiming(req.timing);
    setEditMode(true);
    setEditId(req.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = (id) => {
    const updated = savedRequests.filter((req) => req.id !== id);
    setSavedRequests(updated);
    localStorage.setItem("serviceRequests", JSON.stringify(updated));
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/services.jpg')" }}
    >
      {/* overlay for readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10">
        <Header />
        <div className="max-w-6xl mx-auto px-6 py-10 space-y-8">
          <h2 className="text-3xl font-semibold text-white text-center drop-shadow-lg">
            Avail Services
          </h2>

          {/* IT Services */}
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-3 text-orange-700">
              IT Services You Can Avail
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {IT_SERVICES.map((service) => (
                <button
                  key={service}
                  onClick={() => handleServiceSelect(service)}
                  className={`p-3 border rounded-lg text-left font-medium transition ${
                    selectedService === service
                      ? "bg-blue-600 text-white border-blue-700"
                      : "bg-white/70 hover:bg-blue-50 border-gray-300"
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          {/* Non-IT Services */}
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-3 text-orange-700">
              Non-IT Services You Can Avail
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {NON_IT_SERVICES.map((service) => (
                <button
                  key={service}
                  onClick={() => handleServiceSelect(service)}
                  className={`p-3 border rounded-lg text-left font-medium transition ${
                    selectedService === service
                      ? "bg-blue-600 text-white border-blue-700"
                      : "bg-white/70 hover:bg-blue-50 border-gray-300"
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          {/* Seller Added Services */}
          {addedServices.length > 0 && (
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-orange-700">
                Additional Services Added by Sellers
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {addedServices.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => handleServiceSelect(service.name)}
                    className={`p-3 border rounded-lg text-left transition ${
                      selectedService === service.name
                        ? "bg-blue-600 text-white border-blue-700"
                        : "bg-white/70 hover:bg-blue-50 border-gray-300"
                    }`}
                  >
                    <div className="font-medium">{service.name}</div>
                    <p className="text-sm text-gray-600">
                      {service.description}
                    </p>
                    <p className="text-sm font-semibold mt-1 text-gray-800">
                      ₹{service.price}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Selected Service Form */}
          {selectedService && (
            <form
              onSubmit={handleSubmit}
              className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg space-y-4"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                Selected Service:{" "}
                <span className="text-blue-600">{selectedService}</span>
              </h3>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Address where service is required:
                </label>
                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter service address"
                  className="w-full border rounded-lg p-2 bg-white/60"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Preferred time for service:
                </label>
                <input
                  type="datetime-local"
                  value={timing}
                  onChange={(e) => setTiming(e.target.value)}
                  className="w-full border rounded-lg p-2 bg-white/60"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Save Request
              </button>
            </form>
          )}

          {/* Saved Requests */}
          {savedRequests.length > 0 && (
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-3 text-orange-800">
                Saved Service Requests
              </h3>
              <ul className="space-y-3">
                {savedRequests.map((req) => (
                  <li
                    key={req.id}
                    className="border p-3 rounded-lg bg-white/70 flex justify-between items-start"
                  >
                    <div>
                      <p className="font-semibold text-orange-700">
                        {req.service}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        <strong>Address:</strong> {req.address}
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Timing:</strong>{" "}
                        {new Date(req.timing).toLocaleString()}
                      </p>
                    </div>
                    <button onClick={() => handleEdit(req)}>Edit</button>
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
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AvailServices;
