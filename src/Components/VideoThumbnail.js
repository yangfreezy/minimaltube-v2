import React from "react";
import lodash from "lodash";

import { Layout } from "./../Layouts";

import "../App.css";

const VideoThumbnail = ({ video, setMainYoutubeVideo }) => {
  return (
    <Layout stylesClass="video-thumbnail">
      <img
        alt={lodash.unescape(video.title)}
        src={video.thumbnail}
        onClick={e => setMainYoutubeVideo(video)}
      />
    </Layout>
  );
};
export default VideoThumbnail;
