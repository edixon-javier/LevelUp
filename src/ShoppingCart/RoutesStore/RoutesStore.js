import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ContentStore } from "../content-store/ContentStore";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
import "./RoutesStore.css";
import { CartProducts } from "../CartProducts/CartProducts";
import { TodoContext } from "../ContextStore/ContexStore";

function RoutesStore() {
  return (
    <TodoContext.Consumer>
      {() => (
        <HashRouter>
          <Header />
          <div className="content">
            <Sidebar />
            <Routes>
              <Route path="/Home" element={<p>Todo los elementos</p>}></Route>
              <Route path="/:id" element={<ContentStore />}></Route>
              <Route path="/shopping-cart" element={<CartProducts />}></Route>
              <Route path="*" element={<p>Cuando no funcione</p>}></Route>
            </Routes>
          </div>
        </HashRouter>
      )}
    </TodoContext.Consumer>
  );
}

export { RoutesStore };
