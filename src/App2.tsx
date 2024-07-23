import "./App.css";
import { useEffect, useState } from "react";
import SearchDataFun from "./SearchDataFun.jsx";

function App() {

  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [value, setValue] = useState("");

  function fetchData() {
    return fetch("https://swapi.dev/api/people/")
      .then((a) => a.json())
      .then((b) => setData(b.results));
  }

  useEffect(() => {
    fetchData();
  }, []);

// console.log(data) массив объектов работает

// не выводит то что в ретен сдался 22-07-2024 app3.tsx выводит все
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
        { <SearchDataFun data={data} query={query}/> }

        </center>
      </div>
    </>
  );
}

export default App;
