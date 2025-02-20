import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6 text-center">
      <p className="text-lg mb-4">
        If you like my work, consider buying me a coffee!
      </p>
      <a
        href="https://www.buymeacoffee.com/mudda" // Replace with your own Buy Me A Coffee link
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-yellow-500 text-gray-900 px-4 py-2 rounded-full text-lg hover:bg-yellow-400 transition duration-300"
      >
        Buy Me a Coffee
      </a>
      <p className="mt-4 text-sm">
        <span>Made with </span>
        <FaHeart className="inline-block text-red-500" /> {/* Heart icon */}
        <span> by You</span>
      </p>
    </footer>
  );
};

export default Footer;
