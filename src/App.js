import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }
  return (
    <div className="app">
      <BillInput bill={bill} onSetBill={setBill} />
      <Percentage percentage={percentage1} onSetPercentage={setPercentage1}>
        How did you like the service?
      </Percentage>
      <Percentage percentage={percentage2} onSetPercentage={setPercentage2}>
        How did your friend like the service?
      </Percentage>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Button onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div className="container">
      <h2>How much was the bill?</h2>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      ></input>
    </div>
  );
}

function Percentage({ children, percentage, onSetPercentage }) {
  return (
    <div className="container">
      <h2>{children}</h2>
      <select
        value={percentage}
        onChange={(e) => onSetPercentage(Number(e.target.value))}
      >
        <option value="0">Dissatisfied(0%)</option>
        <option value="5">It was okay(5%)</option>
        <option value="10">It was good(10%)</option>
        <option value="20">Absolutely amazing(20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h1>
      You paid {bill + tip} $({bill} $ + {tip} $ tip)
    </h1>
  );
}

function Button({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
