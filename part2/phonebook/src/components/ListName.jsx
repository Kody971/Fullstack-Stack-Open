const ListName = ({ list, callback }) => {
  return (
    <>
      <li>
        {list.name} {list.number}
        <button onClick={() => callback(list.id, list.name)}>delete</button>
      </li>
    </>
  );
};

export default ListName;
