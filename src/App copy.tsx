import "./App.css";
import { useEffect, useState } from "react";
import SearchData from "./SearchData.jsx";

function App() {

  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [value, setValue] = useState("");

  async function fetchData() {
    const a = await fetch("https://swapi.dev/api/people/");
    const b = await a.json();
    return setData(b.results);
  }

  useEffect(() => {
    fetchData();
  }, []);

console.log(data)


  return (
    <>
      <div className="container">
        <center>
          <h1>React project setup. Class components. Error boundary.</h1>
        </center>

        <div className="input-box">
          <input
            type="search"
            name="search-form"
            id="search-form"
            className="search-input"
            placeholder="Search user"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={() => setQuery(value)}>Search</button>
        </div>

        <center>
        { <SearchData /> }

        </center>
      </div>
    </>
  );
}

export default App;
