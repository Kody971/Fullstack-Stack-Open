const PersonForm = ({
  onSubmit,
  handleName,
  handleNumber,
  valueName,
  valueNumber,
}) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          name: <input onChange={handleName} value={valueName} />
        </div>
        <div>
          number: <input onChange={handleNumber} value={valueNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};

export default PersonForm;
