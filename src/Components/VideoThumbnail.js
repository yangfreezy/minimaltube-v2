import React from "react";

import "../App.css";

const VideoThumbnail = ({ video, setMainYoutubeVideo }) => {
  const handleClick = () => {
    setMainYoutubeVideo(video);
  };
  const { title, thumbnail, thumbnailTitle } = video;
  return (
    <div className="thumbnail" key={title}>
      <img
        className="thumbnail-img"
        alt={title}
        src={thumbnail}
        onClick={handleClick}
      />
      <div className="thumbnail-title" onClick={handleClick}>
        {thumbnailTitle}
      </div>
    </div>
  );
};
export default VideoThumbnail;
