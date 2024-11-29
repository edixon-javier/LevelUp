import React from "react";
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
    <div className="p-6">
      {allgames.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 text-gray-300 mb-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2m.6 2h13l1.6-2m0 0L21 3H6l-2 4m0 0L4 18m0 0h16m-16 0a2 2 0 001 1.73m15-1.73a2 2 0 01-1 1.73M9 18a2 2 0 104 0m0 0a2 2 0 11-4 0z"
            />
          </svg>
          <h3 className="text-xl font-medium text-gray-700 mb-4">
            Your cart is empty
          </h3>
          <p className="text-gray-500 mb-8">
            Add some games to start your adventure!
          </p>
          <button
            onClick={redirectGame}
            className="mt-6 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 transition"
          >
            Browse Games
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {allgames.map((item) => (
            <div
              className="flex flex-col lg:flex-row items-center bg-white p-4 rounded-lg shadow-md"
              key={item.id}
            >
              <img
                src={item.thumbnail}
                alt="Game Thumbnail"
                className="w-24 h-24 rounded-lg object-cover"
              />
              <div className="ml-4 flex-1">
                <h4 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h4>
                <p className="text-gray-600">{item.short_description}</p>
                <p className="mt-2 text-gray-700">
                  Quantity: {item.quantity}
                </p>
                <p className="mt-2 text-gray-700">
                  Price: ${item.id * item.quantity}.00
                </p>
              </div>
              <div className="flex flex-col items-center mt-4 lg:mt-0">
                <div className="flex space-x-2">
                  <button
                    onClick={() => onAddGames(item)}
                    className="bg-green-500 text-white p-2 rounded hover:bg-green-400 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </button>
                  <button
                    onClick={() =>
                      item.quantity === 1
                        ? deleteGame(item.id)
                        : skimProducts(item)
                    }
                    className="bg-red-500 text-white p-2 rounded hover:bg-yellow-400 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </button>
                </div>
                <button
                  onClick={() => deleteGame(item.id)}
                  className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-400 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {allgames.length > 0 && (
        <div className="mt-6 flex justify-between items-center">
          <p className="text-lg font-semibold text-gray-800">
            Total: ${priceTotal}.00
          </p>
          <button
            onClick={deleteProducts}
            className="bg-red-500 text-white py-2 px-6 rounded hover:bg-red-400 transition"
          >
            Empty cart
          </button>
        </div>
      )}
      <Modal />
    </div>
  );
  
  
}

export { CartProducts };
