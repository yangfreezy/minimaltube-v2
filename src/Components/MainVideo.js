import React from "react";
import lodash from "lodash";

import { Layout } from "./../Layouts";

import "../App.css";

const MainVideo = ({ video }) => {
  return (
    <Layout>
      <Layout stylesClass="title">{lodash.unescape(video.title)}</Layout>
      <iframe
        className="main-video-iframe"
        title={lodash.unescape(video.title)}
        src={`https://www.youtube.com/embed/${video.id}`}
        allowFullScreen
      />
    </Layout>
  );
};
export default MainVideo;
