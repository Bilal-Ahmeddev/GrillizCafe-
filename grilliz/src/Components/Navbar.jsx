// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserCircle, FaSun, FaMoon, FaCoffee } from "react-icons/fa";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center text-xl font-bold text-brown-700 dark:text-yellow-400">
          <FaCoffee className="mr-2 text-2xl" /> Grilliz Café
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-lg font-medium">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/menu" className="nav-link">Menu</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="icon-link"><FaShoppingCart /></Link>
          <Link to="/profile" className="icon-link"><FaUserCircle /></Link>
          <button onClick={toggleDarkMode} className="icon-link">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          {/* Mobile Menu Button */}
          <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 text-center py-4">
          <Link to="/home" className="mobile-link">Home</Link>
          <Link to="/menu" className="mobile-link">Menu</Link>
          <Link to="/contact" className="mobile-link">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
