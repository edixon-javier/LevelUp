import React from "react";
import "./ContentStore.css";
import { useFetch } from "../CustomHook/useFech";
import { Loanding } from "../Loanding/Loading";
import { Link, useParams } from "react-router-dom";

function ContentStore({ allgames, setAllGames, setCountProducts }) {
  const { id } = useParams("Anime");
  const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${id}`;
  const { data, uLoanding } = useFetch(url, [id]);

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
    <>
      {uLoanding ? (
        <Loanding />
      ) : (
        <div className="container">
          {data.map((dat) => {
            return (
              <div className="clothing" key={dat.id}>
                <img src={dat.thumbnail} alt="no funciona" />
                <h2>{dat.title}</h2>
                <div className="buttons">
                  <button onClick={() => onAddGames(dat)}>
                    <Link to={"/shopping-cart"}>Comprar</Link>
                  </button>
                  <button onClick={() => onAddGames(dat)}>🛒</button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export { ContentStore };
