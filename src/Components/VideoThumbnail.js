import React from "react";

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
