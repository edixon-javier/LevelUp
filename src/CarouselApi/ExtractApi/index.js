import React, { useState, useEffect } from "react";
import "./ExtractApi.css";

function ExtractApi() {
  const [dogs, setDogs] = useState([]);
  const [img, setImg] = useState(0);

  const cantImg = dogs.length;

  const nextImage = () => {
    setImg(img === cantImg - 1 ? 0 : img + 1);
  };

  const backImage = () => {
    setImg(img === cantImg - 1 ? 0 : img - 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch(
        "https://www.reddit.com/r/dogswithjobs/.json?limit=5"
      );
      const json = await resp.json();
      setDogs(json.data.children);
    };

    fetchData();
  }, []);

  return (
    <div>
      <button onClick={backImage}>⬅️</button>
      {dogs.map((image, index) => {
        return (
          <div>
            {img === index && (
              <img
                key={index}
                src={image.data.thumbnail}
                alt={image.data.title}
              />
            )}
          </div>
        );
      })}
      <button onClick={nextImage}>➡️</button>
    </div>
  );
}

export { ExtractApi };
