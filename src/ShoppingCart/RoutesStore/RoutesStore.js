import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ContentStore } from "../content-store/ContentStore";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
import "./RoutesStore.css";
import { CartProducts } from "../CartProducts/CartProducts";
import { GameContext } from "../ContextStore/ContexStore";

function RoutesStore() {
  return (
    <GameContext.Consumer>
      {() => (
        <HashRouter>
          <Header />
          <div className="content">
            <Sidebar />
            <Routes>
              <Route path="/Home" element={<ContentStore />}></Route>
              <Route path="/:id" element={<ContentStore />}></Route>
              <Route path="/shopping-cart" element={<CartProducts />}></Route>
              <Route path="*" element={<p>Esta pagina no existe</p>}></Route>
            </Routes>
          </div>
        </HashRouter>
      )}
    </GameContext.Consumer>
  );
}

export { RoutesStore };
