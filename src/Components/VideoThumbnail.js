import React from "react";
import PropTypes from "prop-types";

export const VideoThumbnail = ({ video, setMainVideo }) => {
  const { title, thumbnail, thumbnailTitle } = video;
  return (
    <div className="thumbnail" key={title}>
      <img className="thumbnail-img" alt={title} src={thumbnail} />
      <div className="thumbnail-title" onClick={() => setMainVideo(video)}>
        {thumbnailTitle}
      </div>
    </div>
  );
};

VideoThumbnail.propTypes = {
  video: PropTypes.object,
  setMainVideo: PropTypes.func
};
