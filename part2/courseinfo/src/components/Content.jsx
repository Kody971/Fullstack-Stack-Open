import Part from "./Part";

const Content = ({ course }) => {
  return (
    <>
      {course.parts.map((part) => (
        <Part key={part.id} object={part} />
      ))}
    </>
  );
};

export default Content;
