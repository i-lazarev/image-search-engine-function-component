import React, { useState } from "react";
import getImages from "../api/index";

const SearchBar = (props) => {
  const initState = {
    inputValue: "",
  };
  const [state, setState] = useState(initState);

  const searchBtnClick = () => {
    getImages(state.inputValue).then((data) => {
      props.save(data.hits);
    });
  };

  return (
    <div className="row">
      <div className="input-group mb-3 mt-3 ">
        <div className="input-group-prepend">
          <button
            onClick={searchBtnClick}
            className="btn btn-outline-secondary"
            type="button"
          >
            Search
          </button>
        </div>
        <input
          value={state.inputValue}
          onChange={(e) => {
            setState({ inputValue: e.target.value });
          }}
          type="text"
          className="form-control"
          placeholder="Search Word"
          aria-label=""
          aria-describedby="basic-addon1"
        />
      </div>
    </div>
  );
};

export default SearchBar;
