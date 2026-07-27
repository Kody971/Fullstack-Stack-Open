const Header = ({ course }) => {
  return (
    <>
      <h1>{course.name}</h1>
    </>
  );
};

const Content = ({ course }) => {
  return (
    <>
      {course.parts.map((part) => (
        <Part key={part.id} object={part} />
      ))}
    </>
  );
};

const Total = ({ course }) => {
  return (
    <>
      <p>
        <b>{`total of 
        ${course.parts.reduce((sum, current) => sum + current.exercise, 0)} 
        exercise`}</b>
      </p>
    </>
  );
};

const Part = ({ object }) => {
  return (
    <>
      <p>
        {object.name} {object.exercise}
      </p>
    </>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercise: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercise: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercise: 14,
        id: 3,
      },
      {
        name: "Redux",
        exercise: 11,
        id: 4,
      },
    ],
  };

  return <Course course={course} />;
};

export default App;
