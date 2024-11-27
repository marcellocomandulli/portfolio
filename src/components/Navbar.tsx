import { useState } from "react";
import { Link } from "react-router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header>
        <nav
          className="flex justify-around items-center p-3 mb-5 shadow-md bg-[#ffffffb5]"
          aria-label="Main navigation"
        >
          <div className="hidden md:flex md:flex-col md:items-center">
            <span>Marcello Comandulli</span>
            <span>Junior Front End Developer</span>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ): (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          <div
            className={`md:flex space-x-8 ${
              isOpen ? "block" : "hidden"
            } md:block`}
          >
            <ul className="flex flex-col md:flex-row md:space-x-8">
              <li className="relative">
                <Link
                  to="/"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-500"
                >
                  Home
                </Link>
              </li>
              <li className="relative">
                <Link
                  to="/works"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-500"
                >
                  Works
                </Link>
              </li>
              <li className="relative">
                <Link
                  to="/contacts"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-500"
                >
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
