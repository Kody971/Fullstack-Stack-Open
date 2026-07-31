import ListName from "./ListName";

const Person = ({ data, callback }) => {
  return (
    <>
      {data.map((item) => (
        <ListName key={item.id} list={item} callback={callback} />
      ))}
    </>
  );
};

export default Person;
