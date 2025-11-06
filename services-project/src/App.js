import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BuyerCreation from "./components/buyers/BuyerCreation";
import BuyerLogin from "./components/buyers/BuyerLogin";
import BuyerDashboard from "./components/buyers/BuyerDashboard";
import ManageProfile from "./components/buyers/ManageProfile";
import Aboutus from "./components/seller/Aboutus";
import "react-toastify/dist/ReactToastify.css";
import Buyers from "./components/seller/buyers";
import AddService from "./components/seller/AddService";
import SellerManageProfile from "./components/seller/SellerManageProfile";
import SellerDashboard from "./components/seller/SellerDashboard";
import SellerLogin from "./components/seller/SellerLogin";
import AvailServices from "./components/buyers/AvailServices";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Buyers */}
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/create-buyer" element={<BuyerCreation />} />
          <Route path="/" element={<BuyerLogin />} />
          <Route path="/avail-services" element={<AvailServices />} />
          <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
          <Route path="/manage-profile" element={<ManageProfile />} />
          {/* Sellers */}
          <Route path="/buyers" element={<Buyers />} />
          <Route path="/add-service" element={<AddService />} />
          <Route
            path="/seller-manage-profile"
            element={<SellerManageProfile />}
          />
          <Route path="/seller-login" element={<SellerLogin />} />
          <Route path="/seller-dashboard" element={<SellerDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
