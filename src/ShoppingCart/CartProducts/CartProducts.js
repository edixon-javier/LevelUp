import React from "react";
import "./CarProducts.css";

function CartProducts({ allgames, setAllGames, setCountProducts }) {
  const deleteGame = (id) => {
    const gameIndex = allgames.findIndex((todo) => todo.id === id);
    const newGame = [...allgames];
    newGame.splice(gameIndex, 1);
    setAllGames(newGame);
    setCountProducts(allgames.length - 1);
  };

  const deleteProducts = () => {
    setCountProducts(0);
    setAllGames([]);
  };

  const priceTotal = allgames.reduce(
    (accumulator, currentValue) =>
      (accumulator + currentValue.id) * currentValue.quantity,
    0
  );

  const uLoanding = false;
  return (
    <div className="containerCart">
      {uLoanding ? (
        <h2>No tienes productos en el carrito</h2>
      ) : (
        allgames.map((item) => {
          return (
            <div className="carts" key={item.id}>
              <p>Cantidad: {item.quantity} </p>
              <img src={item.thumbnail} alt="no funciona" />
              <p>{item.title}</p>
              <p>${item.id}</p>
              <button onClick={() => deleteGame(item.id)}>Delete</button>
            </div>
          );
        })
      )}
      <button onClick={() => deleteProducts()}>Vaciar carrito</button>
      <p>Total:${priceTotal}</p>
    </div>
  );
}

export { CartProducts };
