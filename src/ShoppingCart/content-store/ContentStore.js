import React from "react";
import "./ContentStore.css";
import { useFetch } from "../CustomHook/useFech";
import { Loanding } from "../Loanding/Loading";
import { Link, useLocation, useParams } from "react-router-dom";
import { GameContext } from "../ContextStore/ContexStore";

function ContentStore() {
  const { onAddGames } = React.useContext(GameContext);
  const location = useLocation();
  const url = `https://free-to-play-games-database.p.rapidapi.com/api/games${location.search}`;
  const { data, uLoanding } = useFetch(url);

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
                <p>{dat.title}</p>
                <p>${dat.id}.00</p>
                <button onClick={() => onAddGames(dat)}>🛒 Add to cart</button>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export { ContentStore };
