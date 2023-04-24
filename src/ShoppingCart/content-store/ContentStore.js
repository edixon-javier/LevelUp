import React, { useEffect, useState } from "react";
import "./ContentStore.css";

function ContentStore() {
  const [data, setData] = useState([]);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e2f0fa47f1mshcd4c29938670ea1p13f620jsn646665d010a3",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        "https://free-to-play-games-database.p.rapidapi.com/api/games",
        options
      )
        .then((response) => response.json())
        .then((response) => {
          setData(response);
        })
        .catch((err) => console.error(err));
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      {data &&
        data.map((dat, index) => {
          return (
            <div className="clothing" key={index}>
              <h2>{dat.title}</h2>
              <img src={dat.thumbnail} alt="no funciona" />
              <button>Comprar</button>
            </div>
          );
        })}
    </div>
  );
}

export { ContentStore };
