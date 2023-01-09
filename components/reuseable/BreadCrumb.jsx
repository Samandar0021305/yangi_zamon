import React from "react";

const BreadCrumb = ({ title }) => {
  return (
    <div className="breadcrumbs overlay">
      <div className="container">
        <div className="bread-inner">
          <div className="row">
            <div className="col-12">
              <h2>{title}</h2>
              <ul className="bread-list">
                <li>
                  <a href="index.html">Bosh sahifa</a>
                </li>
                <li>
                  <i className="icofont-simple-right"></i>
                </li>
                <li className="active">{title}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
