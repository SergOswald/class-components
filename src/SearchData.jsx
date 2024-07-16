import React, { Component } from "react";

class SearchData extends Component {
  constructor( props ) {
     super(props);
   this.data = data;
   this.query = query;
  }

  //console.log(data) ;

  search_parameters = Object.keys(Object.assign({}, ...this.props.data));

    search = (c) => {
      c.filter((c) =>
        search_parameters.some((a) =>
          c[a].toString().toLowerCase().includes(this.props.query)
        )
      );
    };

  render() {

      {this.search(this.props.data).map((dataObj) => {
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
      });
    }
  }}


export default SearchData;
