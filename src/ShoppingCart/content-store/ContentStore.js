import React, { useEffect } from "react";
import "./ContentStore.css";
import { useFetch } from "../CustomHook/useFech";
import { Loanding } from "../Loanding/Loading";
import { useParams } from "react-router-dom";

function ContentStore() {
  const { id } = useParams("Anime");
  const { data, uLoanding } = useFetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${id}`,
    [id]
  );
  return (
    <div className="container">
      {uLoanding ? (
        <Loanding />
      ) : (
        data.map((dat, index) => {
          return (
            <div className="clothing" key={dat.id}>
              <h2>{dat.title}</h2>
              <img src={dat.thumbnail} alt="no funciona" />
              <button>Comprar</button>
            </div>
          );
        })
      )}
    </div>
  );
}

export { ContentStore };
