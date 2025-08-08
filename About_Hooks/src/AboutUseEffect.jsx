import { useState, useEffect } from "react";

function Timer() {
  const [second, setSecond] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecond((s) => s + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <h1>Seconds : {second}</h1>;
}

export default Timer;
