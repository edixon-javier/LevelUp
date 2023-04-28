import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <nav>
      <h4>Categories</h4>
      <ul>
        <li>
          {routes.map((route, index) => (
            <Link key={index} to={route.to}>
              {route.text}
            </Link>
          ))}
        </li>
      </ul>
    </nav>
  );
}

const routes = [
  {
    to: "/shooter",
    text: "shooter",
  },
  {
    to: "/Anime",
    text: "Anime",
  },
  {
    to: "/Strategy",
    text: "Strategy",
  },
  {
    to: "/Fantasy",
    text: "Fantasy",
  },
  {
    to: "/Racing",
    text: "Racing",
  },
  {
    to: "/Social",
    text: "Social",
  },
  {
    to: "/Sports",
    text: "Sports",
  },
];

routes.push();

export { Sidebar };
