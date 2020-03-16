import axios from "axios";

const formatVideoData = videos => {
  let formattedVideos = videos.map(video => ({
    title: video.snippet.title,
    id: video.id.videoId,
    thumbnail:
      video.snippet.thumbnails.high.url ||
      video.snippet.thumbnails.medium.url ||
      video.snippet.thumbnails.default.url
  }));
  return {
    mainVideo: formattedVideos[0],
    relevantVideos: formattedVideos.slice(1)
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
    res.data.ok = true;
    return formatVideoData(res.data.items);
  } catch (err) {
    console.error(err);
    return { data: { ok: false } };
  }
};

export default getYoutubeVideos;
