import React from "react";
import "./tab.css";
function CustomTab({ name = "", setCurrentTab, value, isTabSelected }) {
  return (
    <div
      className={`container ${!isTabSelected && "deselect"}`}
      onClick={() => setCurrentTab(value)}
    >
      {name}
    </div>
  );
}

export default CustomTab;
