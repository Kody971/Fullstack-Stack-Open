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
      <Part object={prop.part1} />
      <Part object={prop.part2} />
      <Part object={prop.part3} />
    </>
  );
};

const Total = (prop) => {
  return (
    <>
      <p>{prop.num1.exercise + prop.num2.exercise + prop.num3.exercise} </p>
    </>
  );
};

const Part = (prop) => {
  return (
    <>
      <p>
        {prop.object.name} {prop.object.exercise}
      </p>
    </>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercise: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercise: 7,
  };
  const part3 = {
    name: "State of a component",
    exercise: 14,
  };

  return (
    <div>
      <Header name={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total num1={part1} num2={part2} num3={part3} />
    </div>
  );
};

export default App;
