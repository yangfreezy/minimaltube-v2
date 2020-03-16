import React from "react";
import lodash from "lodash";

import "../App.css";

const VideoThumbnail = ({ video, setMainYoutubeVideo }) => {
  const handleClick = () => {
    setMainYoutubeVideo(video);
  };
  return (
    <div className="video-thumbnail">
      <img
        alt={lodash.unescape(video.title)}
        src={video.thumbnail}
        onClick={handleClick}
      />
    </div>
  );
};
export default VideoThumbnail;
