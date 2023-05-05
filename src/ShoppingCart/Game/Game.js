import React, { useEffect } from "react";
import { GameContext } from "../ContextStore/ContexStore";
import { useLocation } from "react-router-dom";

function Game() {
  const { setUrlLocation, data } =
    React.useContext(GameContext);

    const location = useLocation();

    useEffect(() => {
      setUrlLocation(`/game${location.search}`);
    }, []);

    console.log(data);
    
  return <h1> Este es donde va estar el componente</h1>;
}

export { Game };
