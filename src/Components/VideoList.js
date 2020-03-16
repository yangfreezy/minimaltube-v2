import React from "react";
import VideoThumbnail from "./VideoThumbnail";

import "../App.css";

const VideoList = ({ videos, setMainYoutubeVideo }) => {
  return (
    <div className="video-list">
      {videos.map(video => {
        return (
          <VideoThumbnail
            key={video.id}
            video={video}
            setMainYoutubeVideo={setMainYoutubeVideo}
          />
        );
      })}
    </div>
  );
};
export default VideoList;
