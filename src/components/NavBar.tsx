import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="grid lg:grid-cols-3 gap-4 p-6  bg-gray-900 text-white">
      {/* Left Section: Home Icon */}

      <div className="flex items-center space-x-4 ">
        {/* <Home className="w-6 h-6 text-blue-400  " />
        <h1 className="text-xl font-bold">My Website</h1> */}
      </div>

      {/* Center Section: Desktop Menu */}
      <ul className="hidden lg:flex justify-center space-x-6">
        <li>
          <a href="#Home" className="hover:text-gray-400">
            Home
          </a>
        </li>
        <li>
          <a href="#About" className="hover:text-gray-400">
            About
          </a>
        </li>
        <li>
          <a href="#Project" className="block py-0 hover:bg-gray-800">
            Project
          </a>
        </li>
        {/* <li>
          <a href="#services" className="hover:text-gray-400">
            Services
          </a>
        </li> */}
        <li>
          <a href="#Contact" className="hover:text-gray-400">
            Contact
          </a>
        </li>
      </ul>

      {/* Right Section: Hamburger Menu Button for Mobile */}
      <div className="lg:hidden flex justify-end items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="p-2">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}

      {isOpen && (
        <>
          <ul className="lg:hidden mt-4 space-y-4 text-center">
            <li>
              <a href="#Home" className="block py-2 hover:bg-gray-800">
                Home
              </a>
            </li>
            <li>
              <a href="#About" className="block py-2 hover:bg-gray-800">
                About
              </a>
            </li>
            <li>
              <a href="#Project" className="block py-2 hover:bg-gray-800">
                Project
              </a>
            </li>
            {/* <li>
      <a href="#services" className="block py-2 hover:bg-gray-800">
        Services
      </a>
    </li> */}
            <li>
              <a href="#Contact" className="block py-2 hover:bg-gray-800">
                Contact
              </a>
            </li>
          </ul>
        </>
      )}
    </nav>
  );
};

export default Navbar;
