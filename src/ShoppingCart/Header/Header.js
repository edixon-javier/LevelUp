import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { GameContext } from "../ContextStore/ContexStore";
import { useLocation } from "react-router-dom";

function Header() {
  const { countProducts } = React.useContext(GameContext);
  const location = useLocation();
  const url = location.pathname + location.search;

  return (
    <nav>
      <ul>
        <li>
          <Link to={"/games"} className={url === "/games" ? "selected" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to={"/shopping-cart"}
            className={url === "/shopping-cart" ? "selected" : ""}
          >
            🛒{countProducts === 0 ? "" : countProducts}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export { Header };
