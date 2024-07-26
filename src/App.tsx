import "./App.css";
import { useEffect, useState } from "react";
import SearchDataFun from "./SearchDataFun.jsx";
import Counter from "./Counter.jsx";


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

  return (
    <>
      <div className="container">
        <header>
          <h1 className="header">Redux. Redux Toolkit, RTK Query. Context api. Task #3.</h1>
        </header>
        <main>
            <div className="input-button">
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
            <div className="box">
              <SearchDataFun data={data} query={query}/>
            </div>

        </main>
        <footer>
          <Counter />
        </footer>
      </div>
    </>
  );
}

export default App;
