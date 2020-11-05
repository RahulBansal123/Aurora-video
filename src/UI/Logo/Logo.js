import React from "react";
import "./Logo.css";

const Logo = (props) => {
  return (
    <div
      className="official_logo_container"
      style={{ fontSize: props.font_size }}
    >
      <h2> AURORA</h2>
      <div className="official_logo"></div>
      <div className="official_logo"></div>
    </div>
  );
};

export default Logo;
