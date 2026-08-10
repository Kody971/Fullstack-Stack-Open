import ShowCountry from "./ShowCountry";
import { useState } from "react";

const Country = ({ data }) => {
  const [selected, setSelected] = useState(null);
  return selected ? (
    <>
      <ShowCountry country={selected} />
    </>
  ) : (
    <>
      {data.length > 10 ? (
        <p>Too many mathes, specify another filter</p>
      ) : data.length === 1 ? (
        <ShowCountry country={data[0]} />
      ) : (
        data.map((item) => (
          <li key={item.cca3}>
            {item.name.common}
            <button onClick={() => setSelected(item)}>Show</button>
          </li>
        ))
      )}
    </>
  );
};

export default Country;
