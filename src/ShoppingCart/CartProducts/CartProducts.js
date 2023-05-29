import React from "react";
import "./CarProducts.css";
import { GameContext } from "../ContextStore/ContexStore";
import _ from "lodash";
import { useNavigate } from "react-router-dom";
import { Modal } from "../Modal/Modal";

function CartProducts() {
  const {
    allgames,
    setAllGames,
    setCountProducts,
    onAddGames,
    skimProducts,
    messageMododal,
  } = React.useContext(GameContext);

  const deleteGame = (id) => {
    messageMododal("Delete product");
    const gameIndex = allgames.findIndex((todo) => todo.id === id);
    const newGame = [...allgames];
    newGame.splice(gameIndex, 1);
    setAllGames(newGame);
    setCountProducts(_.sum(newGame.map((item) => item.quantity)));
  };

  const deleteProducts = () => {
    messageMododal("Delete product");
    setCountProducts(0);
    setAllGames([]);
  };

  const priceTotal = allgames.reduce(
    (accumulator, currentValue) =>
      (accumulator + currentValue.id) * currentValue.quantity,
    0
  );

  const navigate = useNavigate();

  const redirectGame = () => {
    navigate("/games");
  };

  return (
    <div>
      {allgames.length === 0 ? (
        <div className="empty">
          <h3>Your cart is empty</h3>
          <p>Add a game and enjoy new adventures!</p>
          <button onClick={redirectGame}>buy a game</button>
        </div>
      ) : (
        allgames.map((item) => {
          return (
            <div className="carts" key={item.id}>
              <div className="buttonQuantity">
                <button onClick={() => onAddGames(item)}>➕</button>
                <p>Quantity: {item.quantity} </p>
                <button
                  onClick={() =>
                    item.quantity === 1
                      ? deleteGame(item.id)
                      : skimProducts(item)
                  }
                >
                  ➖
                </button>
              </div>
              <img src={item.thumbnail} alt="no funciona" />
              <span>
                <p>{item.title}</p>
                Description: {item.short_description}
              </span>
              <span className="price">
                <p>Price:</p>$ {item.id * item.quantity}.00
              </span>
              <button onClick={() => deleteGame(item.id)}>Delete</button>
            </div>
          );
        })
      )}
      {allgames.length > 0 && (
        <button onClick={() => deleteProducts()}>Empty cart</button>
      )}
      <p className="totalPrice">
        {priceTotal === 0 ? "" : `Total: $ ${priceTotal}.00`}
      </p>
      <Modal></Modal>
    </div>
  );
}

export { CartProducts };
