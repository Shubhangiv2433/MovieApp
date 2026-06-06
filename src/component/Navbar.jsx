import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ search, setSearch }) => {
  return (
    <nav className="bg-black text-white px-6 py-4 shadow-md">

      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-red-500">
          Cinema
        </h1>

        {/* Search Box */}
        <div className="flex-1 flex justify-center">
          <input
            type="text"
            placeholder="Search movies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-[300px] px-4 py-2 rounded-lg outline-none text-black bg-white"
          />
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-8">

          <Link to="/" className="hover:text-red-500 transition">
            Home
          </Link>

          <Link to="/favorites" className="hover:text-red-500 transition">
            Favorites
          </Link>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;