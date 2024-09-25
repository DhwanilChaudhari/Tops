import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./Login";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>ReactJs</h1>
      <h1>Hello World</h1>
      <h1>Count is {count}</h1>
      <div className="card">
        <button className="btn1" onClick={() => setCount((count) => count + 1)}>
          Plus
        </button>
        <button className="btn2" onClick={() => setCount((count) => count - 1)}>
          Minus
        </button>
      </div>
      <Login />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
