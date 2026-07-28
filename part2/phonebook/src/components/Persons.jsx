import ListName from "./ListName";

const Person = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <ListName key={item.name} list={item} />
      ))}
    </>
  );
};

export default Person;
