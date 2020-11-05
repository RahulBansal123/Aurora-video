import React from "react";

import VideoPlayer from "./VideoPlayer/VideoPlayer";

const Video = (props) => {
  return (
    <React.Fragment>
      <VideoPlayer src="https://cdn.videvo.net/videvo_files/video/free/2016-04/small_watermarked/Audio_bands_Feed_preview.webm" />
      <VideoPlayer src="https://ak.picdn.net/shutterstock/videos/1028196644/preview/stock-footage-zoom-out-twelve-o-clock-white-clock-face-beginning-of-time-am-time-lapse-minutes-moving.webm" />{" "}
      <VideoPlayer src="https://ak.picdn.net/shutterstock/videos/1028196644/preview/stock-footage-zoom-out-twelve-o-clock-white-clock-face-beginning-of-time-am-time-lapse-minutes-moving.webm" />{" "}
      <VideoPlayer src="https://ak.picdn.net/shutterstock/videos/1028196644/preview/stock-footage-zoom-out-twelve-o-clock-white-clock-face-beginning-of-time-am-time-lapse-minutes-moving.webm" />{" "}
      <VideoPlayer src="https://ak.picdn.net/shutterstock/videos/1028196644/preview/stock-footage-zoom-out-twelve-o-clock-white-clock-face-beginning-of-time-am-time-lapse-minutes-moving.webm" />
    </React.Fragment>
  );
};

export default Video;
