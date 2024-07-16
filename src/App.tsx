import "./App.css";
import { useEffect, useState } from "react";
import SearchData from "./SearchData.jsx";

function App() {
  const [data, setData] = useState([]);

   console.log(data[0])

  function fetchData() {
    return fetch("https://swapi.dev/api/people/")
      .then((a) => a.json())
      .then((b) => setData(b.results));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const [query, setQuery] = useState("");

  {
    /*

   const search_parameters = Object.keys(Object.assign({}, ...data));
   
    function search(data) {
    return data.filter((data) =>
      search_parameters.some((a) =>
        data[a].toString().toLowerCase().includes(query)
      )
    );
  }
  */
  }

  //  console.log(search(data))

  const [value, setValue] = useState("");



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
            //onChange={(e) => setQuery(e.target.value)}
            placeholder="Search user"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={() => setQuery(value)}>Search</button>
        </div>

        <center>

          <SearchData data={data} query={query} />

          {/* {search(data).map((dataObj) => {
            return (
              <div className="box">
                <div className="card">
                  <div className="category">{dataObj.name} </div>
                  <div className="heading">
                    <p className="">Name: {dataObj.name}</p>
                    <p className="">Height: {dataObj.height}</p>
                    <p className="">Mass: {dataObj.mass}</p>
                    <p className="">Hair color: {dataObj.hair_color}</p>
                    <p className="">Skin color: {dataObj.skin_color}</p>
                  </div>
                </div>
              </div>
            );
          })} */}
        </center>
      </div>
    </>
  );
}

export default App;

