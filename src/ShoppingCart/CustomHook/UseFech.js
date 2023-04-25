import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState([]);
  const [uLoanding, setLoanding] = useState(true);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e2f0fa47f1mshcd4c29938670ea1p13f620jsn646665d010a3",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  useEffect(() => {
    setLoanding(true);
    fetch(url, options)
      .then((response) => response.json())
      .then((response) => {
        setData(response);
      })
      .finally(() => setLoanding(false))
      .catch((err) => console.error(err));
  }, []);

  return { data, uLoanding };
}
