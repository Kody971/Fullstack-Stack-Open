const Header = (prop) => {
  return (
    <>
      <h1>{prop.name}</h1>
    </>
  );
};
const Content = (prop) => {
  return (
    <>
      <p>
        {prop.part} {prop.exercise}
      </p>
    </>
  );
};
const Total = (prop) => {
  return (
    <>
      <p>{prop.num1 + prop.num2 + prop.num3} </p>
    </>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercise1 = 10;
  const part2 = "Using props to pass data";
  const exercise2 = 7;
  const part3 = "State of a component";
  const exercise3 = 14;

  return (
    <div>
      <Header name={course} />
      <Content part={part1} exercise={exercise1} />
      <Content part={part2} exercise={exercise2} />
      <Content part={part3} exercise={exercise3} />
      <Total num1={exercise1} num2={exercise2} num3={exercise3} />
    </div>
  );
};

export default App;
