import React, { useState, useEffect } from "react";
import "./ExtractApi.css";

function ExtractApi() {
  const cantPerson = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const [dogs, setDogs] = useState([]);
  const [img, setImg] = useState(0);

  const cantImg = dogs[0]?.length;

  const nextImage = () => {
    setImg((img + 1) % cantImg);
  };

  const backImage = () => {
    setImg((img - 1 + cantImg) % cantImg);
  };

  function imageneanterior(item){
    return (img - 1 + cantImg) % cantImg;
  }
  
  function imagenSiguiente(item){
    return (img + 1 + cantImg) % cantImg;
  }

  // function vamosLocas3(item){
  //   return (img + 1) % cantImg;
  // }


  // console.log("1",vamosLocas2());  
  // console.log("2",img);
  // console.log("2",vamosLocas());


                    // src={data[(img - 1 + cantImg) % cantImg]?.image}

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
                <div className="firs-image">
                  <img
                    onClick={backImage}
                    src={data[(img - 1 + cantImg) % cantImg]?.image}
                    alt={data[(img - 1 + cantImg) % cantImg]?.name}
                  />
                  <p>{data[(img - 1 + cantImg) % cantImg]?.name}</p>
                </div>
                <div className="second-image">
                  <img
                    className="second-image"
                    src={data[img]?.image}
                    alt={data[img]?.name}
                  />
                  <p>{data[img]?.name}</p>
                </div>
                <div className="third-image">
                  <img
                    className="three-image"
                    onClick={nextImage}
                    src={data[(img + 1) % cantImg]?.image}
                    alt={data[(img + 1) % cantImg]?.name}
                  />
                  <p>{data[(img + 1) % cantImg]?.name}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export { ExtractApi };
