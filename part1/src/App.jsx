const Header = (prop) => {
  return (
    <>
      <h1>{prop.course.name}</h1>
    </>
  );
};

const Content = (prop) => {
  return (
    <>
      <Part object={prop.course.parts[0]} />
      <Part object={prop.course.parts[1]} />
      <Part object={prop.course.parts[2]} />
    </>
  );
};

const Total = (prop) => {
  return (
    <>
      <p>
        {prop.course.parts[0].exercise +
          prop.course.parts[1].exercise +
          prop.course.parts[2].exercise}
      </p>
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
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercise: 10,
      },
      {
        name: "Using props to pass data",
        exercise: 7,
      },
      {
        name: "State of a component",
        exercise: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default App;
