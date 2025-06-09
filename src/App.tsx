import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Gembok from "./component/content";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Gembok />
    </>
  );
}

export default App;
