import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { SiBuymeacoffee } from "react-icons/si";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-20 top-0 left-0 border-b border-gray-700 shadow-md">
      <div className="max-w-screen-xl flex items-center justify-between p-4 mx-auto">
        {/* Logo Section */}
        <a href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
         
        </a>

        {/* Buy Me a Coffee Button for Mobile */}
        <a
          href="https://www.buymeacoffee.com/rohitrayaan"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex md:hidden items-center bg-yellow-500 hover:bg-yellow-600 text-xs font-medium py-1 px-2 rounded-lg transition-colors space-x-1 sm:py-2 sm:px-3 sm:text-sm sm:space-x-2"
        >
          <SiBuymeacoffee className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>Buy Me a Coffee</span>
        </a>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMenu}
          type="button"
          className="md:hidden p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-600 rounded"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Menu Items (Visible on Desktop) */}
        <ul className="hidden md:flex space-x-6 font-medium">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-500 transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Buy Me a Coffee Button for Desktop */}
        <a
          href="https://www.buymeacoffee.com/rohitrayaan"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-sm font-medium py-2 px-4 rounded-lg transition-colors space-x-2"
        >
          <SiBuymeacoffee className="w-5 h-5" />
          <span>Buy Me a Coffee</span>
        </a>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-gray-800 text-white p-4 space-y-2 border-t border-gray-700`}
      >
        <ul className="space-y-2">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="block py-2 px-3 hover:bg-gray-700 rounded transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
