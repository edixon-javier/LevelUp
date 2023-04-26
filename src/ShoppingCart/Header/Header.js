import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <nav>
      <ul>
        {routes.map((route, index) => (
          <li key={index}>
            <Link to={route.to}>{route.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
const routes = [
  {
    to: "/",
    text: "Home",
  },
  {
    to: "/card",
    text: "carrito",
  },
];

routes.push(
  
);

export { Header };
