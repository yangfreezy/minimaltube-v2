import axios from "axios";
import lodash from "lodash";

const clipString = (str, maxLength) => {
  if (str.length < maxLength) return str;
  else return str.slice(0, maxLength) + "..";
};

const standardizeString = str => {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
};

const formatVideoData = videos => {
  let formattedVideos = videos.map(video => {
    let unescapedTitle = lodash.unescape(video.snippet.title);

    let clippedMainTitle = clipString(unescapedTitle, 200);
    let clippedThumbnailTitle = clipString(unescapedTitle, 45);

    let mainTitle = standardizeString(clippedMainTitle);
    let thumbnailTitle = standardizeString(clippedThumbnailTitle);

    return {
      title: mainTitle,
      id: video.id.videoId,
      thumbnail:
        video.snippet.thumbnails.high.url ||
        video.snippet.thumbnails.medium.url ||
        video.snippet.thumbnails.default.url,
      thumbnailTitle: thumbnailTitle
    };
  });
  let formattedVideoData = {
    mainVideo: formattedVideos[0],
    relevantVideos: formattedVideos.slice(1),
    ok: true
  };
  return formattedVideoData;
};

const getYoutubeVideos = async search => {
  let res;
  try {
    res = await axios.get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        part: "snippet",
        maxResults: 6,
        q: search,
        key: process.env.REACT_APP_YOUTUBE_API_KEY
      }
    });
    if (!res.data.items) return { data: { ok: false, empty: true } };
    res.data.ok = true;
    let formattedVideoData = formatVideoData(res.data.items);
    return formattedVideoData;
  } catch (err) {
    console.error(err);
    return { data: { ok: false } };
  }
};

export default getYoutubeVideos;
