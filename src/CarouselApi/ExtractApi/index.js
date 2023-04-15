import React, { useState, useEffect } from "react";
import "./ExtractApi.css";

function ExtractApi() {
  const cantPerson = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [dogs, setDogs] = useState([]);
  const [img, setImg] = useState(1);

  const cantImg = dogs.length;
  

  const nextImage = () => {
    // setImg(img === cantImg  ? 1 : img + 1);
    setImg(img + 1);
    
  };

  const backImage = () => {
    //  setImg(img === cantImg - 1 ? 1 : img + 1);
    setImg(img - 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      const newData = [];
      const resp = await fetch(
        `https://rickandmortyapi.com/api/character/${cantPerson}`
      );
      const json = await resp.json();
      newData.push(json);
      setDogs(newData);
    };

    fetchData();
  }, []);

  return (
    <div className="body">
      <div className="wrapper">
        {dogs &&
          dogs.map((data, index) => {
            return (
              <div className="carousel" key={index}>
                {data[img - 1] && (
                  <img
                    className="firs-image"
                    onClick={backImage}
                    src={data[img - 1].image}
                    alt={data[img - 1].name}
                  />
                )}
                {data[img] && (
                  <img
                    className="second-image"
                    src={data[img].image}
                    alt={data[img].name}
                  />
                )}
                {data[img + 1] && (
                  <img
                    className="three-image"
                    onClick={nextImage}
                    src={data[img + 1].image}
                    alt={data[img + 1].name}
                  />
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export { ExtractApi };
