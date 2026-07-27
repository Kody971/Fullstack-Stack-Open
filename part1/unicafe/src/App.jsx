import { useState } from "react";

const Statistics = (props) => {
  const good = props.good;
  const bad = props.bad;
  const neutral = props.neutral;
  const total = good + bad + neutral;
  const average = (good * 1 + neutral * 0 + bad * -1) / total;

  if (total != 0) {
    return (
      <>
        <p>good {good} </p>
        <p>neutral {neutral} </p>
        <p>bad {bad} </p>
        <p>all {total} </p>
        <p>average {average} </p>
        <p>positive {(good / total) * 100} %</p>
      </>
    );
  }
  return (
    <>
      <p>No feedback given</p>
    </>
  );
};

const Header = (props) => {
  return (
    <>
      <h1>{props.header} </h1>
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(6);
  const [neutral, setNeutral] = useState(2);
  const [bad, setBad] = useState(1);
  const header = ["give feedback", "statistics"];

  return (
    <div>
      <Header header={header[0]} />
      <button>good</button>
      <button>neutral</button>
      <button>bad</button>
      <Header header={header[1]} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
