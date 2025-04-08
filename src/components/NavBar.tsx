import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-4 px-4 md:px-6 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Section: Brand */}
        <div className="flex items-center space-x-2">
          <h1
            className="text-xl md:text-2xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Mudasir
          </h1>
        </div>

        {/* Center Section: Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-8">
          {["Home", "About", "Project", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="text-sm font-medium text-gray-200 hover:text-purple-400 transition-all duration-300 transform hover:scale-105"
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Section: Hamburger Menu Button for Mobile */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 rounded-full hover:bg-gray-700 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-200" />
            ) : (
              <Menu className="w-6 h-6 text-gray-200" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="lg:hidden mt-2 bg-gray-800/90 backdrop-blur-sm rounded-b-lg shadow-lg overflow-hidden">
          {["Home", "About", "Project", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="block py-2 px-4 text-sm font-medium text-gray-200 hover:bg-gray-700 hover:text-purple-400 transition-all duration-300"
                style={{ fontFamily: "'Roboto', sans-serif" }}
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
