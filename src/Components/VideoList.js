import React from "react";

import { VideoThumbnail } from "./VideoThumbnail";

export const VideoList = ({ videos, setMainVideo }) => {
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
