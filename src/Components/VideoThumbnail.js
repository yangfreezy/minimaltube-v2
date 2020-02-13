import React from "react";
import lodash from "lodash";

import "../App.css";

const VideoThumbnail = ({ video, setMainYoutubeVideo }) => {
  console.log(video);
  return (
    <div className="video-thumbnail">
      <img
        alt={lodash.unescape(video.snippet.title)}
        src={video.snippet.thumbnails.high.url}
        onClick={e => setMainYoutubeVideo(video)}
      />
    </div>
  );
};
export default VideoThumbnail;
