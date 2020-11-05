import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";

const VideoSidebar = () => {
  const [like, setlike] = useState(false);
  const classes = ["sidebar_icons_icon"];
  const likeHandler = () => {
    classes.push("sidebar_icons_icon_active");
    if (like) {
      setlike(false);
    } else {
      setlike(true);
    }
  };
  return (
    <div className="video_sidebar">
      <div className="sidebar_icons">
        {like ? (
          <FavoriteIcon
            onClick={likeHandler}
            className="sidebar_icons_icon sidebar_icons_icon_heart"
          />
        ) : (
          <FavoriteBorderIcon
            onClick={likeHandler}
            className="sidebar_icons_icon"
          />
        )}

        <div className="icon_content">222</div>
      </div>
      <div className="sidebar_icons">
        <MessageIcon className="sidebar_icons_icon" />
        <div className="icon_content">222</div>
      </div>
      <div className="sidebar_icons">
        <ShareIcon className="sidebar_icons_icon" />
        <div className="icon_content">222</div>
      </div>
    </div>
  );
};

export default VideoSidebar;
