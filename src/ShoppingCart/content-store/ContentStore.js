import React, { useEffect, useState } from "react";
import "./ContentStore.css";
import { useFetch } from "../CustomHook/UseFech";
import { Loanding } from "../Loanding/Loading";

function ContentStore() {
  const { data, uLoanding } = useFetch(
    "https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser&category=mmorpg&sort-by=release-date"
  );
  console.log(data);
  return (
    <div className="container">
      {uLoanding ? (
        <Loanding />
      ) : (
        data.map((dat, index) => {
          return (
            <div className="clothing" key={index}>
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
