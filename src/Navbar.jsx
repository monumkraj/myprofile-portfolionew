import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // 👈 for menu icons
import Button from "./Button";
import BackgroundAnimation from "./Page/backgroundanimation";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About-Me ", path: "/about" },
    { name: "Project", path: "/project" },
    { name: "Certificate", path: "/certificate" },
    { name: "", path: "" },
    { name: "Resume-Dawonload", path: "/Resume-Dawonload" },
  ];

  return (
    <div className="relative z-50 from-[#0f0c29] via-[#302b63] to-[#24243e] shadow-xl">
      
      <div className="max-w-screen-xl mx-auto py-6 px-4 flex items-center justify-between border-b border-zinc-700 backdrop-blur-sm bg-opacity-70">

        {/* Left Side (Logo + Links) */}
        <div className="flex items-center space-x-16">
          <img
            className="h-10 rounded-full border border-green-400 shadow-md"
            src="/logo.jpg"
            alt="Logo"
          />

          {/* Links (Desktop Only) */}
          <div className="hidden md:flex gap-8 text-white">
            {navItems.map((elem, index) =>
              elem.name.length === 0 ? (
                <span
                  key={index}
                  className="w-[2px] h-6 bg-gradient-to-b from-green-400 to-blue-500 animate-pulse rounded"
                ></span>
              ) : (
                <NavLink
                  key={index}
                  to={elem.path}
                  className={({ isActive }) =>
                    `relative text-sm font-medium transition duration-300 ${
                      isActive ? "text-green-400" : "text-white"
                    } group`
                  }
                >
                  {index === 1 && (
                    <span className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 bg-green-400 rounded-full shadow-lg animate-ping"></span>
                  )}
                  {elem.name}
                  <span className="block h-[1px] bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </NavLink>
              )
            )}
          </div>
        </div>

        {/* Button (Desktop only) */}
        <div className="hidden md:block">
          <Button />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f0c29] text-white px-6 py-4 space-y-4 shadow-lg">
          {navItems.map((elem, index) =>
            elem.name.length === 0 ? (
              <span
                key={index}
                className="w-[2px] h-6 bg-gradient-to-b from-green-400 to-blue-500 animate-pulse rounded block"
              ></span>
            ) : (
              <NavLink
                key={index}
                to={elem.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block text-sm font-medium transition duration-300 ${
                    isActive ? "text-green-400" : "text-white"
                  }`
                }
              >
                {elem.name}
              </NavLink>
            )
          )}

          {/* Button inside mobile menu */}
          <Button />
        </div>
      )}
    </div>
  );
}

export default Navbar;
