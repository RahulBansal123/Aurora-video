import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Auth from "./Auth";
import * as actiontype from "../../State/auth";

const Login = (props) => {
  const [login_email, setLoginEmail] = useState("");
  const [login_pass, setLoginPass] = useState("");
  useEffect(() => {
    if (props.error !== null) {
      alert(props.error);
      props.errorRemover();
    }
    return () => {};
  }, [props.error]);
  const authenticationHandler = (e) => {
    if (login_pass && login_email) {
      e.preventDefault();
      props.authHandler(login_email, login_pass);
    } else {
      alert("Please Enter Email and Password");
    }
    //admin@gmail.com
    //admin123
  };

  return (
    <Auth>
      <form>
        <input
          className="auth_inputs"
          type="email"
          placeholder="Email Address"
          value={login_email}
          onChange={(e) => setLoginEmail(e.target.value)}
        />
        <input
          className="auth_inputs"
          type="password"
          placeholder="Password"
          value={login_pass}
          onChange={(e) => setLoginPass(e.target.value)}
        />
        <button
          style={{ marginTop: "15px" }}
          className="auth_input_buttons login_button"
          onClick={authenticationHandler}
        >
          Login
        </button>
        <Link to="/signup">
          <button className="auth_input_buttons create_button">
            Create Account
          </button>
        </Link>
      </form>
    </Auth>
  );
};
const mapStateToProps = (state) => {
  return {
    error: state.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    authHandler: (email, password) =>
      dispatch(actiontype.auth(email, password, false)),
    errorRemover: () => {
      dispatch(actiontype.errorRemover());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
