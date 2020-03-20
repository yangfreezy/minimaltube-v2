import React from "react";
import PropTypes from "prop-types";

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

VideoList.propTypes = {
  videos: PropTypes.array,
  setMainVideo: PropTypes.func
};
