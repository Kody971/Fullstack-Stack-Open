const ShowCountry = ({ country }) => {
  return (
    <>
      <h1>{country.name.common} </h1>
      <br />
      <p>Capital {country.capital} </p>
      <p>Area {country.area} </p>
      <br />
      <h2>Languages</h2>
      <ul>
        {Object.keys(country.languages).map((language) => (
          <li>{country.languages[language]} </li>
        ))}
      </ul>
      <br />
      <img src={country.flags.png} alt={country.flags.alt} />
    </>
  );
};

export default ShowCountry;
