import { useState, useCallback } from "react";
function Parent() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => setCount((c) => c + 1), []);
  return <Child onClick={increment} />;
}

function Child({ onClick }) {
  return <button onClick={onClick}>Increment</button>;
}

export default Parent;
