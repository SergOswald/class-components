import React, { Component } from "react";

class SearchData extends Component {
  constructor(props) {
    super(props);
    this.data = data;
    this.query = query;
  }

  search_parameters = Object.keys(Object.assign({}, ...this.props.data));

  search(d, q) {
    return d.filter((d) =>
      search_parameters.some((index) => d[index].toString().includes(q))
    );
  }
  render() {
    return (
      <div>
        {search(this.props.data, this.props.query).map((dataObj) => (
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
}

export default SearchData;
