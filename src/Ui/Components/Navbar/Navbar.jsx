import React from "react";
import { MdArrowBackIosNew } from "react-icons/md";

import "./Navbar.scss";

const Navbar = ({ title }) => {
  return (
    <div className="event__navbar">
      <MdArrowBackIosNew className="back-arrow-icon" />
      <h2 className="main__title">{title}</h2>
      <div className="hidden"></div>
    </div>
  );
};

export default Navbar;
