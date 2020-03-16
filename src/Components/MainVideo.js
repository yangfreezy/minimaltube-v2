import React from "react";
import lodash from "lodash";

import { Layout } from "./../Layouts";

import "../App.css";

const MainVideo = ({ video }) => {
  return (
    <Layout stylesClass="main-video">
      <Layout stylesClass="title">{lodash.unescape(video.title)}</Layout>
      <iframe
        title={lodash.unescape(video.title)}
        src={`https://www.youtube.com/embed/${video.id}`}
        width="840"
        height="472.5"
        frameBorder="0"
        allowFullScreen
      />
    </Layout>
  );
};
export default MainVideo;
