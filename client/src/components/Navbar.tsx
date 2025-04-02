import React from "react";
import { Link } from "react-router-dom";
import { Home, User, LogOut, Map } from "lucide-react";
import { useUser } from "../context/UserContext";

const Navbar: React.FC = () => {
  const { user, logout, isAuthenticated } = useUser();
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Home Icon */}
          <Link
            to="/"
            className="flex items-center space-x-2 text-xl font-bold"
          >
            <Home size={24} />
            <span>Beach Hub</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            <Link
              to="/states"
              className="flex items-center space-x-1 hover:text-blue-200"
            >
              <Map size={18} />
              <span>States</span>
            </Link>

            {/* Auth Section */}
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link to="/profile" className="flex items-center space-x-1 hover:text-blue-200">
                  <User size={18} />
                  <span>{user?.username}</span>
                </Link>
                <button
                  onClick={logout}
                  className="flex items-center space-x-1 hover:text-blue-200"
                >
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="hover:text-blue-200">
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-white text-blue-600 px-3 py-1 rounded-md hover:bg-blue-100"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
