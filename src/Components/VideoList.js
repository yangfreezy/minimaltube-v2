import React from "react";
import VideoThumbnail from "./VideoThumbnail";

import { Layout } from "./../Layouts";

import "../App.css";

const VideoList = ({ videos, setMainYoutubeVideo }) => {
  return (
    <Layout stylesClass="video-list">
      {videos.map(video => {
        return (
          <VideoThumbnail
            video={video}
            setMainYoutubeVideo={setMainYoutubeVideo}
          />
        );
      })}
    </Layout>
  );
};
export default VideoList;
