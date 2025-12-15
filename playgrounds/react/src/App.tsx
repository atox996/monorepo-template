import { useCallback, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const add = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <img src="/logo.svg" alt="React logo" style={{ width: "100px" }} />
      <h1>Hello, Web App!</h1>
      <button onClick={add}>Add</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default App;
