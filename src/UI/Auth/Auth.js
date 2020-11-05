import React from "react";
import "./Auth.css";
import Logo from "../Logo/Logo";

const Auth = (props) => {
  return (
    <div className="auth_form">
      <Logo font_size="30px" />
      {props.children}
    </div>
  );
};

export default Auth;
