import React, { useEffect } from "react";
import { GameContext } from "../ContextStore/ContexStore";
import { useLocation } from "react-router-dom";
import { Loanding } from "../Loanding/Loading";
import { useFetch } from "../CustomHook/useFech";

function Game() {
  const { onAddGames } =
    React.useContext(GameContext);

  const location = useLocation();

   const url = `game${location.search}`;
   const { data, uLoanding } = useFetch(url);

   console.log(data);


  return (
    <>
      {uLoanding ? (
        <Loanding />
      ) : (
        <>
          <div className="game">
            <img src={data.thumbnail} alt="game thumbnail" />
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <p>{data.developer}</p>
            <p>{data.freetogame_profile_url}</p>
            <p>{data.game_url}</p>
            <p>{data.genre}</p>
            <p>{data.id}</p>
            <p>{data.platform}</p>
            <p>{data.release_date}</p>
            <p>{data.short_description}</p>
            <p>{data.status}</p>
            <button onClick={() => onAddGames(data)}>🛒 Add to cart</button>
          </div>
        </>
      )}
    </>
  );
}

export { Game };
