import React, { useEffect } from "react";
import "./User.css";
import axios from "axios";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useState } from "react";
import { connect } from "react-redux";
import * as actiontype from "../../State/auth";

const User = (props) => {
  const [logOut, setLogOut] = useState(false);
  const [userName, setUserName] = useState(" ");
  const [id, setId] = useState(" ");
  const logOutHandler = () => {
    props.logout();
    window.location.reload();
  };
  useEffect(() => {
    axios
      .get(
        "https://aurora-video.firebaseio.com/Users/" +
          localStorage.userId +
          ".json"
      )
      .then((response) => {
        setUserName(response.data.username);
        setId(response.data.email);
      });
    return () => {};
  }, [userName, id]);
  return (
    <React.Fragment>
      <div className="user_container">
        <div className="user_back_profile"></div>
        <div className="user_avatar"></div>

        <div className="user_options">
          <MoreHorizIcon
            className="user_options_option"
            onClick={() => setLogOut((preState) => !preState)}
          />
          {logOut ? (
            <div className="logout" onClick={logOutHandler}>
              Logout?
            </div>
          ) : null}
        </div>
        <h2 className="username">{userName}</h2>
        <h4 className="user_id">{id}</h4>
        <h6 className="user_bio">No Bio Yet</h6>
      </div>
      <div className="user_videos">
        <button>Videos</button>
        <button>Likes</button>
      </div>
      <div className="user_video_content">
        <span
          style={{
            color: "rgb(79, 76, 76)",
            margin: "50px auto",
            fontSize: "2rem",
          }}
        >
          No Videos
        </span>
      </div>
    </React.Fragment>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actiontype.logout),
  };
};
export default connect(null, mapDispatchToProps)(User);
