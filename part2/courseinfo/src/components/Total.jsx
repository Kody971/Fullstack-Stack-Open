const Total = ({ course }) => {
  return (
    <>
      <p>
        <b>{`total of 
        ${course.parts.reduce((sum, current) => sum + current.exercises, 0)} 
        exercises`}</b>
      </p>
    </>
  );
};

export default Total;
