import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const data = fetch("https://casey-fs-production.up.railway.app").then((r) =>
      r.json()
    );
    setData(data);
  }, []);

  return (
    <>
      <div>{JSON.stringify(data)}</div>
    </>
  );
}

export default App;
