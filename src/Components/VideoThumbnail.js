import React from "react";
import lodash from "lodash";

import "../App.css";

const VideoThumbnail = ({ video, setMainYoutubeVideo }) => {
  return (
    <div className="video-thumbnail">
      <img
        alt={lodash.unescape(video.snippet.title)}
        src={
          video.snippet.thumbnails.high.url ||
          video.snippet.thumbnails.medium.url ||
          video.snippet.thumbnails.default.url
        }
        onClick={e => setMainYoutubeVideo(video)}
      />
    </div>
  );
};
export default VideoThumbnail;
