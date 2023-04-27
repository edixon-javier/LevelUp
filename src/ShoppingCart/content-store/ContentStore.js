import React from "react";
import "./ContentStore.css";
import { useFetch } from "../CustomHook/useFech";
import { Loanding } from "../Loanding/Loading";
import { Link, useParams } from "react-router-dom";

function ContentStore({
  allgames,
  setAllGames,
  total,
  setTotal,
  countProducts,
  setCountProducts,
}) {
  const { id } = useParams("Anime");
  const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${id}`;
  const { data, uLoanding } = useFetch(url, [id]);

  const onAddGames = (product) => {
    setAllGames([...allgames, product]);
  };

  return (
    <>
      {!uLoanding ? (
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
