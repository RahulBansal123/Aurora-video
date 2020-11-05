import React from "react";
import "./Activity.css";
import PeopleIcon from "@material-ui/icons/People";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ChatIcon from "@material-ui/icons/Chat";
const Activity = () => {
  return (
    <React.Fragment>
      <div className="notification_header">
        Notifications
        <button className="notification_contacts">Contacts</button>
      </div>
      <div className="activity_icon_container">
        <PeopleIcon
          className="activity_icon"
          style={{ backgroundColor: "blue" }}
        />
        <FavoriteBorderIcon
          className="activity_icon"
          style={{ backgroundColor: " rgb(238, 91, 91)" }}
        />
        <AccountCircleIcon
          className="activity_icon"
          style={{ backgroundColor: " rgb(19, 146, 34)" }}
        />
        <ChatIcon
          className="activity_icon"
          style={{ backgroundColor: " rgb(11, 173, 184)" }}
        />
      </div>
      <div className="activity_logo_container">
        <img
          alt=""
          src="https://image.freepik.com/free-vector/vector-illustration-mountain-landscape_1441-72.jpg"
          className="activity_logo"
        />
        <h2>No messages yet</h2>
        <p>Start chat with your friends now</p>
      </div>
    </React.Fragment>
  );
};

export default Activity;
