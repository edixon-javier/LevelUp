import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ContentStore } from "../content-store/ContentStore";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
import "./RoutesStore.css";
import { CartProducts } from "../CartProducts/CartProducts";

function RoutesStore() {
  const [allgames, setAllGames] = useState([]);
  // const [total, setTotal] = useState(0);
  // const [countProducts, setCountProducts] = useState(0);

  return (
    <>
      <HashRouter>
        <Header />
        <div className="content">
          <Sidebar
            className="sidebar"
            allgames={allgames}
            setAllGames={setAllGames}
          />
          <Routes>
            <Route path="/Home" element={<p>Todo los elementos</p>}></Route>
            <Route
              path="/:id"
              element={
                <ContentStore allgames={allgames} setAllGames={setAllGames} />
              }
            ></Route>
            <Route
              path="/shopping-cart"
              element={
                <CartProducts allgames={allgames} setAllGames={setAllGames} />
              }
            ></Route>
            <Route path="*" element={<p>Cuando no funcione</p>}></Route>
          </Routes>
        </div>
      </HashRouter>
    </>
  );
}

export { RoutesStore };
