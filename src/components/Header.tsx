import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
  return (
    <header className="h-25 bg-gradient-to-r from-sunshine to-peach shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            {/* <BookOpen className="h-8 w-8 text-coral" /> */}
            {/* <span className="text-2xl font-playful text-white drop-shadow-md">BoostMyChild</span> */}
            <img className="h-14" src="/BMC_R_Logo.png" alt="" />
          </div>

          <nav className="hidden md:flex space-x-8">
            {/* Home */}
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `text-xl font-semibold transition-colors ${
                  isActive
                    ? "text-coral border-b-2 border-coral"
                    : "text-gray-600 hover:text-coral"
                }`
              }
            >
              Home
            </NavLink>

            {/* About */}
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-xl font-semibold transition-colors ${
                  isActive
                    ? "text-coral border-b-2 border-coral"
                    : "text-gray-600 hover:text-coral"
                }`
              }
            >
              About
            </NavLink>

            {/* Contact */}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-xl font-semibold transition-colors ${
                  isActive
                    ? "text-coral border-b-2 border-coral"
                    : "text-gray-600 hover:text-coral"
                }`
              }
            >
              Contact
            </NavLink>

            {/* Privacy Policy */}
            <NavLink
              to="/privacy-policy"
              className={({ isActive }) =>
                `text-xl font-semibold transition-colors ${
                  isActive
                    ? "text-coral border-b-2 border-coral"
                    : "text-gray-600 hover:text-coral"
                }`
              }
            >
              Privacy Policy
            </NavLink>
          </nav>

          {/* <Link to="/#products" className=" text-gray-600 text-xl hover:text-coral transition-colors font-semibold">Producs</Link> */}
          {/* <a href="#products" className="text-gray-600 hover:text-coral text-xl transition-colors font-semibold">Products</a> */}
          {/* <Link to="/#features" className=" text-gray-600 hover:text-coral text-xl transition-colors font-semibold">Features</Link> */}

          {/* <a href="#features" className="text-gray-600 hover:text-coral text-xl transition-colors font-semibold">Features</a> */}
          {/* 
          <div className="hidden md:flex space-x-4">
            <button
              onClick={() =>
                (window.location.href = "https://www.boostmychild.com")
              }
              className="text-coral hover:text-white bg-white hover:bg-coral px-4 py-2 rounded-full font-semibold transition-all duration-300 shadow-md"
            >
              Sign In
            </button>
            <button
              className="bg-coral text-white px-6 py-2 rounded-full hover:bg-white hover:text-coral transition-all duration-300 font-semibold shadow-lg transform hover:scale-105"
              onClick={() =>
                (window.location.href = "https://www.boostmychild.com")
              }
            >
              Get Started
            </button>
          </div> */}

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <nav className="flex flex-col items-center space-y-4">
              {/* Home */}
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `text-xl font-semibold transition-colors ${
                  isActive
                    ? "text-coral border-b-2 border-coral"
                    : "text-gray-600 hover:text-coral"
                }`
              }
            >
              Home
            </NavLink>

            {/* About */}
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-xl font-semibold transition-colors ${
                  isActive
                    ? "text-coral border-b-2 border-coral"
                    : "text-gray-600 hover:text-coral"
                }`
              }
            >
              About
            </NavLink>

            {/* Contact */}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-xl font-semibold transition-colors ${
                  isActive
                    ? "text-coral border-b-2 border-coral"
                    : "text-gray-600 hover:text-coral"
                }`
              }
            >
              Contact
            </NavLink>

              {/* Privacy Policy */}
              <NavLink
                to="/privacy-policy"
                className={({ isActive }) =>
                  `text-xl font-semibold transition-colors ${
                    isActive
                      ? "text-coral border-b-2 border-coral"
                      : "text-gray-600 hover:text-coral"
                  }`
                }
              >
                Privacy Policy
              </NavLink>

              {/* <Link
                to="/#products"
                className=" text-gray-600 text-xl hover:text-coral transition-colors font-semibold"
              >
                Producs
              </Link> */}
              {/* <a href="#products" className=" text-gray-600 text-xl hover:text-coral transition-colors font-semibold">Products</a> */}
              {/* <a href="#features" className=" text-gray-600 text-xl hover:text-coral transition-colors font-semibold">Features</a> */}
              {/* <Link
                to="/#features"
                className=" text-gray-600 hover:text-coral text-xl transition-colors font-semibold"
              >
                Features
              </Link> */}

              {/* <a
                href="https://www.boostmychild.com/about"
                className=" text-gray-600 text-xl hover:text-coral transition-colors font-semibold"
              >
                About
              </a>
              <a
                href="https://www.boostmychild.com/contactus"
                className=" text-gray-600 text-xl hover:text-coral transition-colors font-semibold"
              >
                Contact
              </a> */}

              {/* <div className="flex flex-col space-y-2 pt-4">
                <button className="text-coral hover:text-white bg-white hover:bg-coral px-4 py-2 rounded-full font-semibold transition-all duration-300 shadow-md text-left max-w-xs text-center">
                  Sign In
                </button>
                <button className="bg-coral text-white px-6 py-2 rounded-full hover:bg-white hover:text-coral transition-all duration-300 font-semibold shadow-lg max-w-xs text-center">
                  Get Started
                </button>
              </div> */}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
