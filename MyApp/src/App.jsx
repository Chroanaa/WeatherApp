import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { FaSearch } from "react-icons/fa";
import Weather from "./weather";
import Wind from "./wind";
import MinMax from "./MinMax";
import Humidity from "./humidity";
import FeelsLike from "./FeelsLike";
import "./App.css";

function App() {
  const [city, setCity] = useState({
    id: 0,
    visibility: 0,
    wind: { speed: null },
    main: {
      min: null,
      max: null,
      humidity: null,
    },
    weather: [{ description: "" }],
  });
  const [search, setSearch] = useState("");
  function handleSearch(e) {
    e.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=c09f0276f82a45df7b8bdcc1bb15d348`
    )
      .then((res) => res.json())
      .then((data) => {
        setCity((oldData) => {
          return {
            ...oldData,
            id: data.id,
            visibility: data.visibility,
            wind: {
              speed: data.wind.speed,
            },
            main: {
              min: data.main.temp_min,
              max: data.main.temp_max,
              humidity: data.main.humidity,
              feelsLike: data.main.feels_like,
            },
            weather: {
              description: data.weather[0].description,
            },
          };
        });
      });
  }
  function HandleChange(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="FormContainer">
          <form action="" onSubmit={handleSearch}>
            <input
              type="text"
              name="CityName"
              id="CityName"
              value={search}
              onChange={HandleChange}
            />
            <button>
              <FaSearch />
            </button>
          </form>
        </div>
        <br />
        <div className="WeatherContainer">
          {city.weather.description && (
            <Weather weather={city.weather.description} />
          )}
          {city.wind.speed && <Wind wind={city.wind.speed} />}
          {city.main.min && <MinMax min={city.main.min} max={city.main.max} />}
          {city.main.humidity && <Humidity humidity={city.main.humidity} />}
          {city.main.feelsLike && <FeelsLike FeelsLike={city.main.feelsLike} />}
        </div>
      </div>
    </div>
  );
}

export default App;
