import axios from "axios";
import lodash from "lodash";

const clipString = (str, maxLength) => {
  return str.length > maxLength ? str.slice(0, maxLength) + ".." : str;
};

const standardizeString = str => {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
};

const formatVideoTitle = title => {
  let unescapedTitle = lodash.unescape(title);

  let clippedMainTitle = clipString(unescapedTitle, 200);
  let clippedThumbnailTitle = clipString(unescapedTitle, 45);

  let mainTitle = standardizeString(clippedMainTitle);
  let thumbnailTitle = standardizeString(clippedThumbnailTitle);

  return { mainTitle, thumbnailTitle };
};

const formatVideoData = videos => {
  let formattedVideos = videos.map(video => {
    let { mainTitle, thumbnailTitle } = formatVideoTitle(video.snippet.title);
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
  return {
    mainVideo: formattedVideos[0],
    relevantVideos: formattedVideos.slice(1),
    ok: true
  };
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
    return formatVideoData(res.data.items);
  } catch (err) {
    console.error(err);
    return { data: { ok: false } };
  }
};

export default getYoutubeVideos;
