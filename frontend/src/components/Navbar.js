import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      // Clear any user authentication tokens or session data here if necessary
      navigate("/");
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">PhoneBasket</Link>
      </div>
      <div className="navbar-links">
        {location.pathname !== "/admin-login" &&
          location.pathname !== "/admin-dashboard" && (
            <>
              <Link to="/cart">Add to Cart</Link>
              <Link to="/admin-login">Admin Login</Link>
            </>
          )}
        {location.pathname === "/admin-dashboard" && (
          <button className="navbar-logout" onClick={handleLogout}>
            Admin Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
