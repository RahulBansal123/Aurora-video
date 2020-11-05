import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import AlbumIcon from "@material-ui/icons/Album";

const VideoFooter = () => {
  return (
    <div className="video_footer">
      <div className="user_username">@Rahul</div>
      <div className="video_description">When you take coffee </div>
      <AlbumIcon
        style={{
          display: "inline",
          fontSize: "3rem",
          position: "absolute",
          right: "10px",
        }}
      />
      <div className="song_container">
        <MusicNoteIcon />
        <div className="song_title_container">
          <div className="song">The Funny Song</div>
        </div>
      </div>
    </div>
  );
};

export default VideoFooter;
