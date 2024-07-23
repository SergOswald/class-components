import React, { Component } from "react";

function SearchDataFun(props) {
  const search_parameters = Object.keys(Object.assign({}, ...props.data));

  // console.log(search_parameters); массив ключей работатет

  function search(d, q) {
    return d.filter((d) =>
      search_parameters.some((index) => d[index].toString().includes(q))
    );
  }

  return (
    <div>
      {search(props.data, props.query).map((dataObj) => (
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
      ))}
    </div>
  );
}

export default SearchDataFun;
