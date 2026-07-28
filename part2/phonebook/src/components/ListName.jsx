const ListName = ({ list }) => {
  return (
    <>
      <li>
        {list.name} {list.number}{" "}
      </li>
    </>
  );
};

export default ListName;
