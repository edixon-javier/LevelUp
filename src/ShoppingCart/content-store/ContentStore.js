import React from "react";
import "./ContentStore.css";
import { Loanding } from "../Loanding/Loading";
import { useLocation, useNavigate } from "react-router-dom";
import { GameContext } from "../ContextStore/ContexStore";
import { useFetch } from "../CustomHook/useFech";
import { Modal } from "../Modal/Modal";

function ContentStore() {
  const { onAddGames } = React.useContext(GameContext);
  const location = useLocation();
  const navigate = useNavigate();

  const url = `games${location.search}`;
  const { data, uLoanding } = useFetch(url);

  const redirectGame = (id) => {
    navigate(`game?id=${id}`);
  };

  return (
    <>
      {uLoanding ? (
        <Loanding />
      ) : (
        <div className="container">
          {data && data.length ? (
            data.map((resp) => {
              return (
                <div
                  className="clothing"
                  key={resp.id}
                  onClick={() => redirectGame(resp.id)}
                >
                  <img src={resp.thumbnail} alt="no funciona" />
                  <p>{resp.title}</p>
                  <p>${resp.id}.00</p>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddGames(resp);
                    }}
                  >
                    🛒 Add to cart
                  </button>
                </div>
              );
            })
          ) : (
            <div className="empty">
              <h3>We have a problem</h3>
              <p>Please reload the page!</p>
            </div>
          )}
          <Modal></Modal>
        </div>
      )}
    </>
  );
}

export { ContentStore };
