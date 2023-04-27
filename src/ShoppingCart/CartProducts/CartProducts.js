import React from "react";
import "./CarProducts.css";

function CartProducts({ allgames, setAllGames }) {
  const deleteGame = (id) => {
    const gameIndex = allgames.findIndex((todo) => todo.id === id);
    const newGame = [...allgames];
    newGame.splice(gameIndex, 1);
    setAllGames(newGame);
  };

  const priceTotal = allgames.reduce(
    (accumulator, currentValue) => accumulator + currentValue.id,
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
            <>
              <div className="carts" key={item.id}>
                <p>Cantidad: {1} </p>
                <img src={item.thumbnail} alt="no funciona" />
                <h2>{item.title}</h2>
                <p>${item.id}</p>
                <button onClick={() => deleteGame(item.id)}>Delete</button>
              </div>
            </>
          );
        })
      )}
      <p>Precio total:{priceTotal}</p>
    </div>
  );
}

export { CartProducts };
