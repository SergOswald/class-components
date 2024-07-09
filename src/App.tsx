import "./App.css";
import { useEffect, useState } from "react";

// return fetch("https://jsonplaceholder.typicode.com/users")

function App() {
  const [data, setData] = useState([]);

  function fetchData() {
    return fetch("https://swapi.dev/api/people/")
      .then((a) => a.json())
      .then((b) => setData(b.results));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const [query, setQuery] = useState("");
  const search_parameters = Object.keys(Object.assign({}, ...data));

  console.log(search_parameters)

  function search(data) {
    return data.filter((data) =>
      search_parameters.some((parameter) =>
        data[parameter].toString().toLowerCase().includes(query)
      )
    );
  }

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
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search user"
          />
          <button>Search</button>
        </div>

        <center>
          {search(data).map((dataObj) => {
            return (
              <div className="box">
                <div class="card">
                  <div class="category">{dataObj.name} </div>
                  <div class="heading">
                    <p class="">{dataObj.name}</p>
                    <p class="">{dataObj.height}</p>
                    <p class="">{dataObj.mass}</p>
                    <p class="">{dataObj.hair_color}</p>
                    <p class="">{dataObj.skin_color}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </center>
      </div>
    </>
  );
}

export default App;
