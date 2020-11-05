import React, { useEffect } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import Feed from "./UI/Feed/Feed";
import User from "./UI/User/User";
import Search from "./UI/Search/Search";
import Activity from "./UI/Activity/Activity";
import Login from "./UI/Auth/Login";
import CreateAccount from "./UI/Auth/CreateAccount";
import TiktokFooter from "./Components/TiktokFooter/TiktokFooter";
import { connect } from "react-redux";
import Spinner from "./UI/Spinner/Spinner";
import * as actiontype from "./State/auth";

const App = (props) => {
  useEffect(() => {
    props.autoSignIn();
  }, [props]);

  let routes = (
    <Switch>
      <Route path="/auth" component={Login} />
      <Route path="/signup" component={CreateAccount} />
      <Redirect to="/auth" />
    </Switch>
  );
  if (props.authStatus) {
    routes = (
      <Switch>
        <Route path="/feed" component={Feed} />
        <Route path="/search" component={Search} />
        <Route path="/user" component={User} />
        <Route path="/activity" component={Activity} />
        <Redirect to="/feed" />
      </Switch>
    );
  }
  const IsLoading = () => {
    if (props.loading) {
      return <Spinner />;
    } else {
      return (
        <React.Fragment>
          {routes}
          {!props.authStatus ? null : <TiktokFooter />}
        </React.Fragment>
      );
    }
  };
  return (
    <div className="tiktok">
      <div className="tiktok_container">
        <IsLoading />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    authStatus: state.idToken !== null && state.userId !== null,
    loading: state.loading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    autoSignIn: () => dispatch(actiontype.authCheckState()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
