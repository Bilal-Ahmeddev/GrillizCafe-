// src/components/Home.js
import React from "react";
import { Link } from "react-router-dom";
import abc from "../assets/abc.png";

const Home = () => {
  return (
    <div 
      className="relative bg-cover bg-center h-screen flex items-center justify-center text-center" 
      style={{ backgroundImage: `url(${abc})` }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 text-white px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Welcome to <span className="text-yellow-400">Grilliz Café</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
        Your favorite place for coffee, sandwiches, and desserts!
        </p>
        
        {/* CTA Button */}
        <Link 
          to="/menu" 
          className="px-6 py-3 bg-yellow-500 text-gray-900 font-bold rounded-lg shadow-md text-lg transition transform hover:bg-yellow-400 hover:scale-105"
        >
          Explore Our Menu →
        </Link>
      </div>
    </div>
  );
};

export default Home;
