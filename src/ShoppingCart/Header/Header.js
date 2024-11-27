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

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gray-0 text-black">
      <div className="mx-auto px-4 flex justify-between">
        <Link to="/games" className="flex items-center">
          <img
            src={whiteLogo}
            alt="Logo"
            className="h-16 w-16"
            style={{ filter: "brightness(1.1)", mixBlendMode: "multiply" }}
          />
          <h1 className="text-lg font-bold">LevelUp</h1>
        </Link>

        <ul className="flex items-center space-x-6 text-base">
          <li>
            <Link
              to={"/games?sort-by=player-count&sort-order=desc"}
              className={`py-2 px-4 rounded hover:bg-gray-300 transition ${
                url === "/games" ? "bg-gray-50" : ""
              }`}
            >
              Most popular
            </Link>
          </li>

          <li className="relative">
            <button
              onClick={toggleDropdown}
              className={`py-2 px-4 rounded   hover:bg-gray-300 transition " ${
                isDropdownOpen ? "bg-gray-50" : ""
              }`}
            >
              Category
            </button>
            {isDropdownOpen && (
              <ul className="absolute right-2.5 mt-2 bg-gray-50 rounded shadow-lg overflow-hidden">
                <li>
                  {routesCategory.map((route, index) => (
                    <Link
                      key={index}
                      to={route.to}
                      className={`block px-4 py-2 hover:bg-gray-300 ${
                        url === route.to ? "selected" : ""
                      }`}
                    >
                      {route.text}
                    </Link>
                  ))}
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link
              to={"/games?sort-by=alphabetical"}
              className={`py-2 px-4 rounded hover:bg-gray-300 transition ${
                url === "/games" ? "bg-gray-50" : ""
              }`}
            >
              platform
            </Link>
          </li>
          <li>
            <Link
              to={"/games?platform=pc"}
              className={`py-2 px-4 rounded hover:bg-gray-300 transition ${
                url === "/games" ? "bg-gray-50" : ""
              }`}
            >
              Alphabetical Order
            </Link>
          </li>

          <li>
            <Link
              to="/shopping-cart"
              className={`relative py-2 px-4 rounded hover:bg-gray-300 transition ${
                url === "/shopping-cart" ? "bg-gray-700" : ""
              }`}
            >
              <svg
                class="w-6 h-6 text-gray-800 dark"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                />
              </svg>

              {countProducts > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {countProducts}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

const routesCategory = [
  {
    to: "/games?category=shooter",
    text: "shooter",
  },
  {
    to: "/games?category=Anime",
    text: "Anime",
  },
  {
    to: "/games?category=Strategy",
    text: "Strategy",
  },
  {
    to: "/games?category=Fantasy",
    text: "Fantasy",
  },
  {
    to: "/games?category=Racing",
    text: "Racing",
  },
  {
    to: "/games?category=Social",
    text: "Social",
  },
  {
    to: "/games?category=Sports",
    text: "Sports",
  },
];

export { Header };
