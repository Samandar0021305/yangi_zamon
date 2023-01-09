import React from "react";

const Pagination = () => {
  return (
    <div className="pagination">
      <ul className="pagination-list">
        <li>
          <a href="#">
            <i className="icofont-rounded-left"></i>
          </a>
        </li>
        <li className="active">
          <a href="#">1</a>
        </li>
        <li>
          <a href="#">2</a>
        </li>
        <li>
          <a href="#">3</a>
        </li>
        <li>
          <a href="#">
            <i className="icofont-rounded-right"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
