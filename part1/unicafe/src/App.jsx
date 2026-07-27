import { useState } from "react";

const StatisticLine = ({ text, value }) => {
  return (
    <>
      <p>
        {text} {value}
      </p>
    </>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const total = good + bad + neutral;
  const average = (good * 1 + neutral * 0 + bad * -1) / total;

  if (total !== 0) {
    return (
      <>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={`${(good / total) * 100} %`} />
      </>
    );
  }
  return (
    <>
      <p>No feedback given</p>
    </>
  );
};

const Header = ({ header }) => {
  return (
    <>
      <h1>{header} </h1>
    </>
  );
};

const Button = (props) => {
  return (
    <>
      <button onClick={props.onClick}>{props.text} </button>
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const header = ["give feedback", "statistics"];

  return (
    <div>
      <Header header={header[0]} />
      <Button onClick={() => setGood(good + 1)} text={"good"} />
      <Button onClick={() => setNeutral(neutral + 1)} text={"neutral"} />
      <Button onClick={() => setBad(bad + 1)} text={"bad"} />
      <Header header={header[1]} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
