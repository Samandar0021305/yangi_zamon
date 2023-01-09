import React from "react";
import logo from "../../styles/img/section-img.png";
import Image from "next/image";

const HeaderText = ({ title, desc }) => {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      <Image src={logo} alt="logo" />
      <p>{desc}</p>
    </div>
  );
};

export default HeaderText;
