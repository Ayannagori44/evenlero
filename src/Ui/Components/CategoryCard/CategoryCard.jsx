import React from "react";

import { BiBookContent } from "react-icons/bi";
import "./CategoryCard.scss";

const CategoryCard = ({ title, active }) => {
  return (
    <button className={`category__card ${active ? "active" : ""}`}>
      <BiBookContent className="category__card-icon" />
      {title}
    </button>
  );
};

export default CategoryCard;
