import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import dummydata from "./dummydata";
import Header from "./Header";

const BuyerCreation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    age: "",
    address: "",
    state: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.address) {
      toast("Fill in all the required fields!");
      return;
    }

    dummydata.addBuyer(formData);

    setFormData({
      name: "",
      email: "",
      password: "",
      phone: "",
      age: "",
      address: "",
      state: "",
    });

    navigate("/buyer-login");
  };

  return (
    <div>
      <Header />
      <div className="max-w-lg mx-auto mt-8 p-6 bg-white shadow-lg rounded-2xl">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Create Buyer Profile
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Enter the buyer name"
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
            required
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter Email"
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />

          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="Enter Password"
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
            id=""
          />

          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            placeholder="Enter Phone"
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
            required
          />

          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            placeholder="Enter Age"
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />

          <label>Address:</label>
          <textarea
            name="address"
            value={formData.address}
            placeholder="Enter Address"
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
            required
          />

          <label>State:</label>
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          >
            <option value="">Select State</option>
            <option value="AP">Andhra Pradesh</option>
            <option value="AR">Arunachal Pradesh</option>
            <option value="AS">Assam</option>
            <option value="BR">Bihar</option>
            <option value="CH">Chhattisgarh</option>
            <option value="GA">Goa</option>
            <option value="GJ">Gujarat</option>
            <option value="HR">Haryana</option>
            <option value="HP">Himachal Pradesh</option>
            <option value="JH">Jharkhand</option>
            <option value="KT">Karnataka</option>
            <option value="KL">Kerala</option>
            <option value="MP">Madhya Pradesh</option>
            <option value="MH">Maharashtra</option>
            <option value="MI">Manipur</option>
            <option value="MG">Meghalaya</option>
            <option value="MZ">Mizoram</option>
            <option value="NL">Nagaland</option>
            <option value="OR">Orrissa</option>
            <option value="PB">Punjab</option>
            <option value="RJ">Rajasthan</option>
            <option value="SK">Sikkim</option>
            <option value="TN">Tamil Nadu</option>
            <option value="TG">Telangana</option>
            <option value="TR">Tripura</option>
            <option value="UP">Uttar Pradesh</option>
            <option value="UK">Uttarakhand</option>
            <option value="DL">Delhi</option>
            <option value="WB">West Bengal</option>
            {/* Union Territories */}
            <option value="AN">Andaman and Nicobar Islands</option>
            <option value="CH">Chandigarh</option>
            <option value="DN">Dadra and Nagar Haveli and Daman and Diu</option>
            <option value="DL">Delhi</option>
            <option value="JK">Jammu and Kashmir</option>
            <option value="LA">Ladakh</option>
            <option value="LD">Lakshadweep</option>
            <option value="PY">Puducherry</option>
          </select>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default BuyerCreation;
