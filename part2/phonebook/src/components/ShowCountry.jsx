import axios from "axios";
import { useState, useEffect } from "react";

const ShowCountry = ({ country }) => {
  const KEY = import.meta.env.VITE_OPENWEATHER_KEY;
  const baseWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${KEY}&units=metric`;
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    console.log("Sending request to:", baseWeatherUrl);
    axios
      .get(`${baseWeatherUrl}`)
      .then((response) => setWeather(response.data));
  }, [country]);

  console.log(weather);
  return weather === null ? (
    <>
      <p>Loading weather data...</p>
    </>
  ) : (
    <>
      <h1>{country.name.common} </h1>
      <br />
      <p>Capital {country.capital} </p>
      <p>Area {country.area} </p>
      <br />
      <h2>Languages</h2>
      <ul>
        {Object.keys(country.languages).map((language) => (
          <li key={language}>{country.languages[language]} </li>
        ))}
      </ul>
      <br />
      <img src={country.flags.png} alt={country.flags.alt} />
      <h2>{`Weather in ${country.capital}`} </h2>
      <p>{`Temperature ${weather.main.temp} Celcius`} </p>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
      />
      <p>{`Wind ${weather.wind.speed} m/s`} </p>
    </>
  );
};
{
}

export default ShowCountry;
