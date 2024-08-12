import "./App.css";
import { useEffect, useState } from "react";

// return fetch("https://jsonplaceholder.typicode.com/users")

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [value, setValue] = useState("");

  // console.log(query);

  function fetchData() {
    return fetch("https://swapi.dev/api/people/")
      .then((a) => a.json())
      .then((b) => setData(b.results));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const search_parameters = Object.keys(Object.assign({}, ...data));

  // console.log(search_parameters);

  //  console.log(data); // массив объектов

  function search(data: any[]) {
    return data.filter((data) =>
      search_parameters.some((index) =>
        //       data[parameter].toString().toLowerCase().includes(query)
        data[index].toString().includes(query)
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
            onChange={(e) => setValue(e.target.value)}
            //   onChange={(e) => setQuery(e.target.value)}
            placeholder="Search user"
            value={value}
          />
          <button onClick={() => setQuery(value)}>Search</button>
        </div>

        <center>
          {search(data).map((dataObj) => {
            return (
              <div className="box">
                <div className="card">
                  <div className="category">{dataObj.name} </div>
                  <div className="heading">
                    <p className="">{dataObj.name}</p>
                    <p className="">{dataObj.height}</p>
                    <p className="">{dataObj.mass}</p>
                    <p className="">{dataObj.hair_color}</p>
                    <p className="">{dataObj.skin_color}</p>
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
