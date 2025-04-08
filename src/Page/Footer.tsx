import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-6 text-center">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-base md:text-lg text-gray-200 mb-3">
          Loved my work? Treat me to a coffee!
        </p>
        <a
          href="https://www.buymeacoffee.com/Mudasir"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 px-5 py-2 rounded-full text-base md:text-lg font-semibold hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md"
        >
          Buy Me a Coffee
        </a>
        <p className="mt-3 text-xs md:text-sm text-gray-300 flex items-center justify-center gap-1">
          <span>Made with</span>
          <FaHeart className="text-red-500 animate-pulse" />
          <span>by Mudasir</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
