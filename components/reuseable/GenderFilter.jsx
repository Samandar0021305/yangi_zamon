import React from "react";

const GenderFilter = () => {
  return (
    <div className="single-widget category">
      <h3 className="title">Blog toifalari</h3>
      <ul className="categor-list">
        <li>
          <a href="#">Erkaklar uchun</a>
        </li>
        <li>
          <a href="#">Ayollar uchun</a>
        </li>
      </ul>
    </div>
  );
};

export default GenderFilter;
