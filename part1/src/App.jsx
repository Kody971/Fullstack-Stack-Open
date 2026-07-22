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
      <Part part={prop.part1} exercise={prop.exercise1} />
      <Part part={prop.part2} exercise={prop.exercise2} />
      <Part part={prop.part3} exercise={prop.exercise3} />
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

const Part = (prop) => {
  return (
    <>
      <p>
        {prop.part} {prop.exercise}
      </p>
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
      <Content
        part1={part1}
        exercise1={exercise1}
        part2={part2}
        exercise2={exercise2}
        part3={part3}
        exercise3={exercise3}
      />
      <Total num1={exercise1} num2={exercise2} num3={exercise3} />
    </div>
  );
};

export default App;
