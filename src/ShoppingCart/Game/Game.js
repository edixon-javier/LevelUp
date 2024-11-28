import React, { useEffect } from "react";
import { GameContext } from "../ContextStore/ContexStore";
import { useLocation } from "react-router-dom";
import { Loanding } from "../Loanding/Loading";
import { useFetch } from "../CustomHook/useFech";
import "./Games.css";
import { Modal } from "../Modal/Modal";

function Game() {
  const { onAddGames } = React.useContext(GameContext);

  const location = useLocation();

  const url = `game${location.search}`;
  const { data, uLoanding } = useFetch(url);

  return (
    <>
      {uLoanding ? (
        <Loanding />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 rounded-lg ">
          <section
            className="md:col-span-1 flex flex-col items-start   bg-white p-6 rounded-lg shadow-md"
            style={{ height: "fit-content" }}
          >
            <img
              src={data.thumbnail}
              alt="thumbnail"
              className="w-full h-auto rounded-lg mb-6"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Additional Information
            </h3>
            <div className="space-y-2 text-gray-600 text-sm pl-2">
              <p>
                <strong>Genre:</strong> {data.genre}
              </p>
              <p>
                <strong>Platform:</strong> {data.platform}
              </p>
              <p>
                <strong>Developer:</strong> {data.developer}
              </p>
              <p>
                <strong>Status:</strong> {data.status}
              </p>
              <p className="text-gray-900 font-bold">
                <strong>Price:</strong> ${data.id}.00
              </p>
            </div>
            <button
              onClick={() => onAddGames(data)}
              className="mt-6 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 transition"
            >
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
              </svg>{" "}
              Add to cart
            </button>
          </section>

          <section className="md:col-span-2 flex flex-col space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                {data.title}
              </h1>
              <p className="text-gray-700 text-sm leading-relaxed">
                {data.description}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                {data.title} Screenshots
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.screenshots.map((screenshot, index) => (
                  <img
                    key={index}
                    src={screenshot.image}
                    alt={`game thumbnail image ${index + 1}`}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                ))}
              </div>
            </div>
          </section>

          <Modal />
        </div>
      )}
    </>
  );
}

export { Game };
