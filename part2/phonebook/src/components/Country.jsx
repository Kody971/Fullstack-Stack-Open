import ShowCountry from "./ShowCountry";

const Country = ({ data }) => {
  return (
    <>
      {data.length > 10 ? (
        <p>Too many mathes, specify another filter</p>
      ) : data.length === 1 ? (
        <ShowCountry country={data[0]} />
      ) : (
        data.map((item) => <li key={item.cca3}> {item.name.common} </li>)
      )}
    </>
  );
};

export default Country;
