import React, { Fragment } from "react";
import lodash from "lodash";

import "../App.css";

const MainVideo = ({ video }) => {
  return (
    <Fragment>
      <div className="title">{lodash.unescape(video.title)}</div>
      <iframe
        className="main-video-iframe"
        title={lodash.unescape(video.title)}
        src={`https://www.youtube.com/embed/${video.id}`}
        allowFullScreen
      />
    </Fragment>
  );
};
export default MainVideo;
