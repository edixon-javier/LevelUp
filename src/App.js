import './App.css';
import React, { useState } from "react";
import { CarouselApi } from './CarouselApi';
import { ShoppingCart } from './ShoppingCart';
import { TodoApp } from './TodoApp';


function App() {
  const [activeC, setActiveC] = useState("CarouselApi");

  const componentes = {
    TodoApp: <TodoApp />,
    CarouselApi: <CarouselApi />,
    ShoppingCart: <ShoppingCart />,
  };

  return (
    <div>
      <header>
        <button onClick={() => setActiveC("TodoApp")}>Todo List</button>
        <button onClick={() => setActiveC("CarouselApi")}>Carousel</button>
        <button onClick={() => setActiveC("ShoppingCart")}>
          Shopping Cart
        </button>
      </header>
      <div>{componentes[activeC]}</div>
    </div>
  );
}

export default App;
