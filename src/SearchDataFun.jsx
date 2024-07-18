import React, { Component } from "react";

function SearchDataFun({ data }, { query }) {
  const search_parameters = Object.keys(Object.assign({}, ...data));

  function search(data) {
    return data.filter((data) =>
      search_parameters.some((index) => data[index].toString().includes(query))
    );
  }

  return search(data).map((dataObj) => {
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
    </div>;
  });
}

export default SearchDataFun;
