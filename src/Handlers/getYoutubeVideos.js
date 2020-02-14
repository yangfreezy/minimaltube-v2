import axios from "axios";

const getYoutubeVideos = async (
  e,
  setMainYoutubeVideo,
  setRelevantVideos,
  setSearch,
  search
) => {
  e.preventDefault();
  let data;
  try {
    data = await axios.get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        part: "snippet",
        maxResults: 6,
        q: search,
        key: process.env.REACT_APP_YOUTUBE_API_KEY
      }
    });
    setMainYoutubeVideo(data.data.items[0]);
    setRelevantVideos(data.data.items.slice(1));
    setSearch("");
  } catch (err) {
    console.error(err);
  }
};

export default getYoutubeVideos;
