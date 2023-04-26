import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ContentStore } from "../content-store/ContentStore";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
import "./RoutesStore.css";

function RoutesStore() {
  return (
    <>
      <HashRouter>
        <Header />
        <div className="content">
          <Sidebar className="sidebar" />
          <Routes>
            <Route path="/:id" element={<ContentStore />}></Route>
            <Route path="/card" element={<p>Carrito de compras</p>}></Route>
            <Route path="*" element={<p>Cuando no funcione</p>}></Route>
          </Routes>
        </div>
      </HashRouter>
    </>
  );
}

export { RoutesStore };
