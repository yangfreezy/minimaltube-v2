import React from "react";
import VideoThumbnail from "./VideoThumbnail";

import "../App.css";

const VideoList = ({ videos, setMainVideo }) => {
  return (
    <div className="video-list">
      <div className="video-bar">
        {videos.map(video => {
          return (
            <VideoThumbnail
              key={video.id}
              video={video}
              setMainVideo={setMainVideo}
            />
          );
        })}
      </div>
    </div>
  );
};
export default VideoList;
