import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { GameContext } from "../ContextStore/ContexStore";

function Header() {
  const {countProducts} = React.useContext(GameContext);
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/Home"}>Home</Link>
        </li>
        <li>
          <Link to={"/shopping-cart"}>🛒{countProducts}</Link>
        </li>
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
    text: "Carrito",
  },
];

routes.push();

export { Header };
