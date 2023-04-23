import React from "react";
import CustomImage from "../CustomImage";
import "./normal.css";

const length = 1084;
const arr = Array.apply(null, { length }).map(Number.call, Number);
const Normal = () => {
  return (
    <div>
      <span>Normal View</span>
      <div className="img-view-container">
        {arr.map((item, index) => (
          <CustomImage name={index} />
        ))}
      </div>
    </div>
  );
};

export default Normal;
