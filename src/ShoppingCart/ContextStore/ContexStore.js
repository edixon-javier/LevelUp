import React, { useState } from "react";
import { useFetch } from "../CustomHook/useFech";

const GameContext = React.createContext();

function TodoProvider(props) {
  const [allgames, setAllGames] = useState([]);
  const [countProducts, setCountProducts] = useState(0);
  const [urlLocation, setUrlLocation] = useState("");

  const url = `https://free-to-play-games-database.p.rapidapi.com/api/games${urlLocation}`;
  const { data, uLoanding } = useFetch(url);

  const onAddGames = (product) => {
    setCountProducts(allgames.length + 1);
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
      setAllGames(updatedGames);
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
        data,
        uLoanding,
        setUrlLocation,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
}

export { GameContext, TodoProvider };
