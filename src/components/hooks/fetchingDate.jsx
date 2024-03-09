import { useEffect, useState } from "react";
import Baner from "../Baner/Baner";
function FetchingDate({ weather }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resonpse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${weather}&appid=d179da8edc7323f0e3a496d2f5bc8c57`
        );
        if (resonpse.ok) {
          const json = await resonpse.json();
          setData(json);
        } else {
          console.log("Error:", resonpse.status);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    fetchData();
  }, [weather]);

  return (
    <>
      <Baner data={data} />
    </>
  );
}

export default FetchingDate;
