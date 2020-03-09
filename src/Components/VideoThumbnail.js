import React from "react";
import lodash from "lodash";

import { Layout } from "./../Layouts";

import "../App.css";

const VideoThumbnail = ({ video, setMainYoutubeVideo }) => {
  return (
    <Layout stylesClass="video-thumbnail">
      <img
        alt={lodash.unescape(video.snippet.title)}
        src={
          video.snippet.thumbnails.high.url ||
          video.snippet.thumbnails.medium.url ||
          video.snippet.thumbnails.default.url
        }
        onClick={e => setMainYoutubeVideo(video)}
      />
    </Layout>
  );
};
export default VideoThumbnail;
