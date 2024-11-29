import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ContentStore } from "../content-store/ContentStore";
import { Header } from "../Header/Header";
import "./RoutesStore.css";
import { CartProducts } from "../CartProducts/CartProducts";
import { GameContext } from "../ContextStore/ContexStore";
import { Game } from "../Game/Game";
import NotFound from "../NotFound/NotFound";

function RoutesStore() {
  return (
    <GameContext.Consumer>
      {() => (
        <HashRouter>
          <Header />
            <Routes>
              <Route path="/" element={<ContentStore />}></Route>
              <Route path="/:id" element={<ContentStore />}></Route>
              <Route path="/shopping-cart" element={<CartProducts />}></Route>
              <Route path="/games/game" element={<Game />}></Route>
              <Route path="*" element={<NotFound/>}></Route>
            </Routes>
        </HashRouter>
      )}
    </GameContext.Consumer>
  );
}

export { RoutesStore };
