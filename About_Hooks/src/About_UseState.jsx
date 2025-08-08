import { useState } from "react";

function About_UseState() {
  let [count, setCount] = useState(0);

  let addValue = () => {
    setCount(count + 1);
  };

  let removeValue = () => {
    setCount((count -= count > 0 ? 1 : 0));
  };

  return (
    <>
      <h1>Value : {count}</h1>

      <button onClick={addValue}>Add Value{count}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value {count}</button>
    </>
  );
}

export default About_UseState;
