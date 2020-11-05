import React, { useState } from "react";
import "./TiktokFooter.css";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import AddBoxIcon from "@material-ui/icons/AddBox";
import ChatIcon from "@material-ui/icons/Chat";
import PersonIcon from "@material-ui/icons/Person";
import { NavLink } from "react-router-dom";

const TiktokFooter = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="tiktok_footer_container">
      <NavLink to="/feed" activeClassName="tiktok_footer_icons_clicked">
        <HomeIcon className="tiktok_footer_icons" />
      </NavLink>
      <NavLink to="/search" activeClassName="tiktok_footer_icons_clicked">
        <SearchIcon className="tiktok_footer_icons" />
      </NavLink>
      <div
        style={{ position: "relative" }}
        onClick={() => setShow((prevState) => !prevState)}
      >
        <AddBoxIcon className="tiktok_footer_icons_add" />
        <div
          style={{ display: show ? "block" : "none" }}
          className="addShowIcon"
        >
          In Progress
        </div>
      </div>
      <NavLink to="/activity" activeClassName="tiktok_footer_icons_clicked">
        <ChatIcon className="tiktok_footer_icons" />
      </NavLink>
      <NavLink to="/user" activeClassName="tiktok_footer_icons_clicked">
        <PersonIcon className="tiktok_footer_icons" />
      </NavLink>
    </div>
  );
};

export default TiktokFooter;
