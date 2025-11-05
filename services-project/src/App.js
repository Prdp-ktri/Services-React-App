import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BuyerCreation from "./components/buyers/BuyerCreation";
import BuyerLogin from "./components/buyers/BuyerLogin";
import BuyerDashboard from "./components/buyers/BuyerDashboard";
import ManageProfile from "./components/buyers/ManageProfile";
import Aboutus from "./components/seller/Aboutus";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Buyers */}
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/create-buyer" element={<BuyerCreation />} />
          <Route path="/buyer-login" element={<BuyerLogin />} />
          <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
          <Route path="/manage-profile" element={<ManageProfile />} />
          {/* Sellers */}
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
