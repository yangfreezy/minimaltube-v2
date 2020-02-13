import React from "react";
import lodash from "lodash";

import "../App.css";

const MainVideo = ({ video }) => {
  return (
    <div className="main-video">
      <div className="title"> {lodash.unescape(video.snippet.title)}</div>
      <iframe
        title={lodash.unescape(video.snippet.title)}
        src={`http://www.youtube.com/embed/${video.id.videoId}`}
        width="840"
        height="472.5"
        frameborder="0"
        allowfullscreen
      />
    </div>
  );
};
export default MainVideo;
