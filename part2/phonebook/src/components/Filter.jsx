const Filter = ({ callback }) => {
  return (
    <>
      filter shown with: <input onChange={callback} />
    </>
  );
};

export default Filter;
