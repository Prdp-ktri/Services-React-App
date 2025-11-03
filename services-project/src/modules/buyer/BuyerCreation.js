import { useState } from "react";

const BuyerCreation = () => {
  const [buyers, setBuyers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    address: "",
    state: "",
    budget: "",
    description: "",
  });

  return (
    <div>
      <h2>Create Buyer Profile</h2>

      <form>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          value={formData.name}
          name=""
          onChange={handleChange}
          id=""
          className="w-full border rounded-lg p-2"
          required
          placeholder="Enter name"
        />{" "}
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          value={formData.email}
          name=""
          onChange={handleChange}
          id=""
          className="w-full border rounded-lg p-2"
          required
          placeholder="Enter Email"
        />
        <br />
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          value={formData.age}
          name=""
          onChange={handleChange}
          id=""
          className="w-full border rounded-lg p-2"
          required
          placeholder="Enter Age"
        />
        <br />
        <label htmlFor="address">Address:</label>
        <textarea
          name=""
          value={formData.address}
          onChange={handleChange}
          id="addressInp"
          className="w-full border rounded-lg p-2"
          required
          placeholder="Enter Address"
        ></textarea>
        <br />
        <label htmlFor="state">State:</label>
        <select
          name=""
          value={formData.state}
          onChange={handleChange}
          id=""
          className="w-full border rounded-lg p-2"
          required
          placeholder="Select the State"
        >
          <option value="AP">Andhra Pradesh</option>
          <option value="AR">Arunachal Pradesh</option>
          <option value="AS">Assam</option>
          <option value="BR">Bihar</option>
          <option value="CH">Chhattisgarh</option>
          <option value="GO">Goa</option>
          <option value="GJ">Gujarat</option>
          <option value="HR">Haryana</option>
          <option value="HP">Himachal Pradesh</option>
          <option value="JH">Jharkhand</option>
          <option value="KA">Karnataka</option>
          <option value="KL">Kerala</option>
          <option value="MP">Madhya Pradesh</option>
          <option value="MH">Maharashtra</option>
          <option value="MN">Manipur</option>
          <option value="MG">Meghalaya</option>
          <option value="MZ">Mizoram</option>
          <option value="NG">Nagaland</option>
          <option value="OD">Orrissa</option>
          <option value="PB">Punjab</option>
          <option value="RJ">Rajasthan</option>
          <option value="SK">Sikkim</option>
          <option value="TN">Tamil Nadu</option>
          <option value="TG">Telangana</option>
          <option value="TR">Tripura</option>
          <option value="UP">Uttar Pradesh</option>
          <option value="UK">Uttarakhand</option>
          <option value="WB">West Bengal</option>
          <option value="AN">Andaman & Nicobar Island</option>
          <option value="CG">Chandigarh</option>
          <option value="DD">Dadra & Nagar Haveli and Daman & Diu</option>
          <option value="DL">Delhi</option>
          <option value="JK">Jammu & Kashmir</option>
          <option value="LK">Ladakh</option>
          <option value="LD">Lakshadweep</option>
          <option value="PD">Puducherry</option>
        </select>
        <br />
        <label htmlFor="budget">Budget:</label>
        <input
          type="number"
          value={formData.budget}
          name=""
          onChange={handleChange}
          id=""
          className="w-full border rounded-lg p-2"
          required
          placeholder="Enter Budget"
        />
        <br />
        <label htmlFor="description">Description:</label>
        <textarea
          name=""
          value={formData.description}
          onChange={handleChange}
          id=""
          className="w-full border rounded-lg p-2"
          required
          placeholder="Enter Your Description"
        ></textarea>
        <br />
        <button type="submit">Add Buyer</button>
      </form>
    </div>
  );
};
