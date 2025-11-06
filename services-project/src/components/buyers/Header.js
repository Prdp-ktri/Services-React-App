import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // You could also clear session or specific data here
    toast("Logged out successfully!");
    navigate("/buyer-login");
  };

  return (
    <header className="bg-blue-400 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1
          className="text-xl font-bold cursor-pointer"
          onClick={() => navigate("/buyer-dashboard")}
        >
          Buyer Portal
        </h1>
        <nav className="flex items-center space-x-6">
          <Link to="/about-us" className="hover:underline">
            About Us
          </Link>
          <Link to="/avail-services" className="hover:underline">
            Avail Services
          </Link>
          <Link to="/manage-profile" className="hover:underline">
            Manage Profile
          </Link>
          <button
            onClick={handleLogout}
            className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
