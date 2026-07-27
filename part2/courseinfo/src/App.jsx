const Header = (props) => {
  return (
    <>
      <h1>{props.course.name}</h1>
    </>
  );
};

const Content = (props) => {
  return (
    <>
      <Part object={props.course.parts[0]} />
      <Part object={props.course.parts[1]} />
      <Part object={props.course.parts[2]} />
    </>
  );
};

const Total = (props) => {
  return (
    <>
      <p>
        {props.course.parts[0].exercise +
          props.course.parts[1].exercise +
          props.course.parts[2].exercise}
      </p>
    </>
  );
};

const Part = (props) => {
  return (
    <>
      <p>
        {props.object.name} {props.object.exercise}
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
