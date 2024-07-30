import React, { Component } from "react";
import "./App.css";
import CheckboxComponent from './CheckboxComponent';

function SearchDataFun(props) {
  const search_parameters = Object.keys(Object.assign({}, ...props.data));

  function search(d, q) {
    return d.filter((d) =>
      search_parameters.some((index) => d[index].toString().includes(q))
    );
  }

  return (
    <div>
      {search(props.data, props.query).map((dataObj) => (

          <div className="card">
            <div className="category">{dataObj.name} </div>
            <div className="heading">
              <p className="">name: {dataObj.name}</p>
              <p className="">height: {dataObj.height}</p>
              <p className="">mass: {dataObj.mass}</p>
              <p className="">hair color: {dataObj.hair_color}</p>
              <p className="">skin color: {dataObj.skin_color}</p>
            </div>
            <CheckboxComponent />
        </div>
      ))}
    </div>
  );
}

export default SearchDataFun;
