import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GameContext } from "../ContextStore/ContexStore";
import { useLocation } from "react-router-dom";
import whiteLogo from "./logo/whiteLogo.png";

function Header() {
  const { countProducts } = React.useContext(GameContext);
  const location = useLocation();
  const url = location.pathname + location.search;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-50 text-black">
      <div className="mx-auto px-4 flex justify-between items-center py-4">
        <Link to="/games" className="flex items-center space-x-2">
          <img
            src={whiteLogo}
            alt="Logo"
            className="h-16 w-16 bg-transparent"
            style={{ filter: "brightness(1.1)", mixBlendMode: "multiply" }}
          />
          <h1 className="text-lg font-bold">LevelUp</h1>
        </Link>

        <div className="flex items-center space-x-6 text-base hidden md:flex">
          <Link
            to={"/games?sort-by=player-count&sort-order=desc"}
            className={`py-2 px-4 rounded hover:bg-gray-300 transition ${
              url === "/games?sort-by=player-count&sort-order=desc"
                ? "bg-gray-400"
                : ""
            }`}
          >
            Most popular
          </Link>
          <div className="relative z-20">
            <button
              onClick={toggleDropdown}
              className={`py-2 px-4 rounded hover:bg-gray-300 transition ${
                isDropdownOpen || url.includes("category") ? "bg-gray-400" : ""
              }`}
            >
              Category
            </button>
            {isDropdownOpen && (
              <ul className="absolute right-0 mt-2 bg-gray-50 rounded shadow-lg overflow-hidden">
                {routesCategory.map((route, index) => (
                  <li key={index}>
                    <Link
                      to={route.to}
                      className={`block px-4 py-2 hover:bg-gray-300 ${
                        url === route.to ? "bg-gray-400" : ""
                      }`}
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {route.text}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Link
            to={"/games?platform=pc"}
            className={`py-2 px-4 rounded hover:bg-gray-300 transition ${
              url === "/games?platform=pc" ? "bg-gray-400" : ""
            }`}
          >
            Platform
          </Link>

          <Link
            to={"/games?sort-by=alphabetical"}
            className={`py-2 px-4 rounded hover:bg-gray-300 transition ${
              url === "/games?sort-by=alphabetical" ? "bg-gray-400" : ""
            }`}
          >
            Alphabetical Order
          </Link>

          <Link
            to="/shopping-cart"
            className={`"relative py-2 px-4 rounded hover:bg-gray-300 transition focus:outline-none" ${
              url === "/shopping-cart" ? "bg-gray-400" : ""
            }`}
          >
            <div className="relative inline-block">
              <svg
                className="w-6 h-6 text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2"
                  d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                />
              </svg>

              {countProducts > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1 py-0.5 rounded-full shadow">
                  {countProducts}
                </span>
              )}
            </div>
          </Link>
        </div>

        <button onClick={toggleMenu} className="md:hidden text-black">
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-50 p-4">
          <Link
            to={"/games?sort-by=player-count&sort-order=desc"}
            className="block py-2 px-4 text-black hover:bg-gray-300"
          >
            Most popular
          </Link>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="block py-2 px-4 text-black hover:bg-gray-300"
            >
              Category
            </button>
            {isDropdownOpen && (
              <ul className="bg-gray-800 mt-2 rounded shadow-lg">
                {routesCategory.map((route, index) => (
                  <li key={index}>
                    <Link
                      to={route.to}
                      className="block px-4 py-2 text-black hover:bg-gray-300"
                    >
                      {route.text}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Link
            to={"/games?sort-by=alphabetical"}
            className="block py-2 px-4 text-black hover:bg-gray-300"
          >
            Platform
          </Link>

          <Link
            to={"/games?platform=pc"}
            className="block py-2 px-4 text-black hover:bg-gray-300"
          >
            Alphabetical Order
          </Link>

          <Link
            to="/shopping-cart"
            className="block py-2 px-4 text-black hover:bg-gray-300"
          >
            Shopping Cart
          </Link>
        </div>
      )}
    </nav>
  );
}

const routesCategory = [
  { to: "/games?category=shooter", text: "Shooter" },
  { to: "/games?category=anime", text: "Anime" },
  { to: "/games?category=strategy", text: "Strategy" },
  { to: "/games?category=fantasy", text: "Fantasy" },
  { to: "/games?category=racing", text: "Racing" },
  { to: "/games?category=social", text: "Social" },
  { to: "/games?category=sports", text: "Sports" },
];

export { Header };
