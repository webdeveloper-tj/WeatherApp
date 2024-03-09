import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
function Header({ setWeather, weather }) {
  const [cityName, setCityName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setWeather(cityName);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <header className="container-">
        <div className="nav container">
          <h1>BlackCode</h1>
          <form className="search_bar">
            <input
              type="search"
              placeholder="Search by city name"
              onChange={(e) => setCityName(e.target.value)}
              value={cityName}
            />
            <button className="submit" onClick={(e) => handleSubmit(e)}>
              Submit
            </button>
          </form>
          <Link to="about" className="about">
            About me
          </Link>
          <Link to="contact" className="contact">
            Contact me
          </Link>
        </div>
      </header>
      {/* <header className="container">

      </header> */}
    </>
  );
}

export default Header;
