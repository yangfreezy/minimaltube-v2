import React from "react";
import PropTypes from "prop-types";

export const MainVideo = ({ video }) => {
  const { title, id } = video;
  return (
    <div className="main-video">
      <div className="title">{title}</div>
      <iframe
        className="main-video-iframe"
        title={title}
        src={`https://www.youtube.com/embed/${id}`}
        allowFullScreen
      />
    </div>
  );
};

MainVideo.propTypes = {
  video: PropTypes.object
};
