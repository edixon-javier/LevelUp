import React from "react";
import { RoutesStore } from "./RoutesStore/RoutesStore";
import { TodoProvider } from "./ContextStore/ContexStore";

function ShoppingCart() {
  return (
    <TodoProvider>
      <RoutesStore />
    </TodoProvider>
  );
}

export { ShoppingCart };
