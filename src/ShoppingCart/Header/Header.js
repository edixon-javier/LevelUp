import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

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
    to: "/Home",
    text: "Home",
  },
  {
    to: "/shopping-cart",
    text: "carrito",
  },
];

routes.push();

export { Header };
