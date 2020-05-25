import React from "react";
import "./a_styles/BackToolbar.css";

let header = "Home";
function BackToolbar(props) {
  return (
    <div className="back-toolbar">
      <span className="header">{header}</span>
    </div>
  );
}

export default BackToolbar;
