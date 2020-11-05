import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actiontype from "../../State/auth";
import Auth from "./Auth";

const CreateAccount = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [username, setUsername] = useState("");
  const [confirmpass, setConfirmPass] = useState("");
  useEffect(() => {
    if (props.error !== null) {
      alert(props.error);
      props.errorRemover();
    }
    return () => {};
  }, [props.error]);

  const thishandler = (e) => {
    e.preventDefault();
    if (pass && confirmpass) {
      if (pass === confirmpass) {
        props.authHandler(email, pass, username);
      } else {
        alert("Password dont matches");
      }
    } else {
      alert("Please Enter Password");
    }
  };
  return (
    <Auth>
      <form>
        <input
          className="auth_inputs"
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="auth_inputs"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="auth_inputs"
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <input
          className="auth_inputs"
          type="password"
          placeholder="Confirm Password"
          value={confirmpass}
          onChange={(e) => setConfirmPass(e.target.value)}
        />
        <button
          style={{ marginTop: "15px" }}
          className="auth_input_buttons login_button"
          onClick={thishandler}
        >
          Sign Up
        </button>
        <Link to="/auth">
          <button className="auth_input_buttons create_button">Go Back</button>
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
    authHandler: (email, password, username) =>
      dispatch(actiontype.auth(email, password, username, true)),
    errorRemover: () => {
      dispatch(actiontype.errorRemover());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);
