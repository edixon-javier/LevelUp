import React from "react";
import "./ShoppingCart.css";
import { ContentStore } from "./content-store/ContentStore";
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";

function ShoppingCart() {
  return (
    <React.Fragment>
      <Header />
      <div className="content">
        <Sidebar className="sidebar" />
        <ContentStore />
      </div>
    </React.Fragment>
  );
}

export { ShoppingCart };
