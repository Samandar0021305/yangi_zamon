import React from "react";

const SearchForm = () => {
  return (
    <div className="single-widget search">
      <div className="form">
        <input type="email" placeholder="Bu yerda qidiring..." />
        <a className="button" href="#">
          <i className="fa fa-search"></i>
        </a>
      </div>
    </div>
  );
};

export default SearchForm;
