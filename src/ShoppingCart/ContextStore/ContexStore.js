import React, { useState } from "react";
import _ from "lodash";

const GameContext = React.createContext();

function TodoProvider(props) {
  const [allgames, setAllGames] = useState([]);
  const [countProducts, setCountProducts] = useState(0);

  const onAddGames = (product) => {
    const index = allgames.findIndex((item) => item.id === product.id);
    if (index === -1) {
      const newProduct = {
        ...product,
        quantity: 1,
      };
      setAllGames([...allgames, newProduct]);
    } else {
      const updatedGames = allgames.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCountProducts(_.sum(updatedGames.map((item) => item.quantity)));
      setAllGames(updatedGames);
    }
  };

  const skimProducts = (product) => {
    const index = allgames.findIndex((item) => item.id === product.id);

    if (index === -1) {
      const newProduct = {
        ...product,
        quantity: 1,
      };
      setAllGames([...allgames, newProduct]);
    } else {
      const updatedGames = allgames.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      );
      setAllGames(updatedGames);
      setCountProducts(_.sum(updatedGames.map((item) => item.quantity)));
    }
  };

  return (
    <GameContext.Provider
      value={{
        allgames,
        setAllGames,
        countProducts,
        setCountProducts,
        onAddGames,
        skimProducts,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
}

export { GameContext, TodoProvider };
