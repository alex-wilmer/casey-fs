import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    async function getData() {
      const data = await fetch(
        "https://casey-fs-production.up.railway.app"
      ).then((r) => r.json());
      setData(data);
    }

    getData();
  }, []);

  return (
    <>
      <div>{JSON.stringify(data)}</div>
    </>
  );
}

export default App;
