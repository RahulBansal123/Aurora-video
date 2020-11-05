import React, { useState, useRef } from "react";
import VideoFooter from "../VideoFooter/VideoFooter";
import VideoSidebar from "../VideoSidebar/VideoSidebar";
import Logo from "../../../UI/Logo/Logo";
import "./VideoPlayer.css";
const VideoPlayer = (props) => {
  const [pause, setpause] = useState(true);
  const video = useRef(null);
  const videoClick = () => {
    if (pause === true) {
      video.current.play();
      setpause((prevState) => !prevState);
    } else {
      video.current.pause();
      setpause((prevState) => !prevState);
    }
  };

  return (
    <div className="VideoPlayer">
      <Logo font_size="15px" />

      <video
        src={props.src}
        playsInline
        className="video"
        ref={video}
        onClick={videoClick}
      >
        YOUR BROWSER DON'T SUPPORT VIDEOS
      </video>
      <VideoFooter />
      <VideoSidebar />
      {/* <hr /> */}
    </div>
  );
};

export default VideoPlayer;
