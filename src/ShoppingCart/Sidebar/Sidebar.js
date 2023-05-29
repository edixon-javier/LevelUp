import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();
  const url = location.pathname + location.search;

  return (
    <nav>
      <h4>Sort by category</h4>
      <ul>
        <li>
          {routes.map((route, index) => (
            <Link
              key={index}
              to={route.to}
              className={url === route.to ? "selected" : ""}
            >
              {route.text}
            </Link>
          ))}
        </li>
      </ul>
      <h4>lphabetical order</h4>
      <ul>
        <li>
          <Link
            to={"/games?sort-by=alphabetical"}
            className={url === "/games?sort-by=alphabetical" ? "selected" : ""}
          >
            alphabetica
          </Link>
        </li>
      </ul>
      <h4>By platform</h4>
      <ul>
        <li>
          <Link
            to={"/games?platform=pc"}
            className={url === "/games?platform=pc" ? "selected" : ""}
          >
            Pc
          </Link>
        </li>
      </ul>
      <h4>Most popular</h4>
      <ul>
        <li>
          <Link
            to={"/games?sort-by=player-count&sort-order=desc"}
            className={
              url === "/games?sort-by=player-count&sort-order=desc"
                ? "selected"
                : ""
            }
          >
            List popular games
          </Link>
        </li>
      </ul>
    </nav>
  );
}

const routes = [
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

export { Sidebar };
