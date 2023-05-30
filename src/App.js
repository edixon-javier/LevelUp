import "./App.css";
import React, { useState } from "react";
import { CarouselApi } from "./CarouselApi";
import { ShoppingCart } from "./ShoppingCart";
import { TodoApp } from "./TodoApp";

function App() {
  const [activeC, setActiveC] = useState("ShoppingCart");
  const [showHeader, setShowHeader] = useState(true);

  const components = {
    TodoApp: <TodoApp />,
    CarouselApi: <CarouselApi />,
    ShoppingCart: <ShoppingCart />,
  };

  const toggleHeader = () => {
    setShowHeader(!showHeader);
  };

  return (
    <div>
      <header className={showHeader ? "header-hidden" : ""}>
        <button onClick={() => {setActiveC("TodoApp"); toggleHeader();}}>
          Todo List
        </button>
        <button onClick={() => {setActiveC("CarouselApi"); toggleHeader();}}>Carousel</button>
        <button onClick={() => {setActiveC("ShoppingCart"); toggleHeader();}}>
          Shopping Cart
        </button>
      </header>
      <button className="especial-button" onClick={() => toggleHeader()}>
        🪅
      </button>
      <div>{components[activeC]}</div>
    </div>
  );
}

export default App;
