import React, { useEffect } from "react";
import "./ContentStore.css";
import { Loanding } from "../Loanding/Loading";
import { useLocation } from "react-router-dom";
import { GameContext } from "../ContextStore/ContexStore";

function ContentStore() {
  const { onAddGames, data, uLoanding, setUrlLocation } =
    React.useContext(GameContext);
  const location = useLocation();

  useEffect(() => {
    setUrlLocation(location.search);
  }, [location.search]);

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
