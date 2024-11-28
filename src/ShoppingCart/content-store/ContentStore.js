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

  console.log(data);

  const redirectGame = (id) => {
    navigate(`game?id=${id}`);
  };

  return (
    <>
      {uLoanding ? (
        <Loanding />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
          {data && data.length ? (
            data.map((resp) => {
              return (
                <div
                  className="clothing"
                  key={resp.id}
                  onClick={() => redirectGame(resp.id)}
                >
                  <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg overflow-hidden transition-transform duration-300 transform hover:-translate-y-1">
                    <div className="w-full aspect-video">
                      <img
                        src={resp.thumbnail}
                        className="w-full h-full object-cover rounded-t-lg"
                        alt="Thumbnail not found"
                      />
                    </div>
                    <div className="flex-grow p-4 flex flex-col justify-between">
                      <div>
                        <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-black">
                          {resp.title}
                        </h5>
                        <p className="text-sm font-normal text-gray-700 dark:text-gray-400 mt-2">
                          {resp.short_description}
                        </p>
                      </div>
                      <a
                        onClick={(e) => {
                          e.stopPropagation();
                          onAddGames(resp);
                        }}
                        className="inline-flex items-center w-24 gap-2 mt-4 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        ${resp.id}.00
                        <svg
                          class="w-6 h-6 text-gray-50 dark"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="23"
                          height="22"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
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
