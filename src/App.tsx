import "./App.css";
import React, { useEffect, useState } from "react";
import SearchDataFun from "./SearchDataFun.jsx";
import Counter from "./Counter.jsx";
import * as XLSX from "xlsx";

export const ThemeContext = React.createContext()

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [value, setValue] = useState("");
  const [selectedData, setSelectedData] = useState([]);
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  function fetchData() {
    return fetch("https://swapi.dev/api/people/")
      .then((a) => a.json())
      .then((b) => setData(b.results));
  }

  useEffect(() => {
    fetchData();
  }, []);

  function themeStyles(dark) {
    return {
      backgroundColor: dark ? "#333" : "aquamarine",
      color: dark ? "aquamarine" : "#333",
    }
  }

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(selectedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "SelectedData");
    XLSX.writeFile(workbook, "selected_data.xlsx");
  };

  return (
    <>
      <ThemeContext.Provider value={darkTheme}>

        <div style={themeStyles(darkTheme)}>
          <div className="container">
            <header>
              <button onClick={toggleTheme}>Toggle Theme</button>
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
                <SearchDataFun data={data} query={query} setSelectedData={setSelectedData} selectedData={selectedData}/>
              </div>

            </main>
            <footer>
              {<Counter />}
              <button onClick={downloadExcel}>Download</button>
            </footer>
          </div>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;