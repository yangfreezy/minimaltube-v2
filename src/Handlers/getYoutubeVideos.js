import axios from "axios";

const getYoutubeVideos = async search => {
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
    data.data.ok = true;
    return data;
  } catch (err) {
    console.error(err);
    err.response.data.error.errors.map(error => console.error(error.message));
    return { data: { ok: false } };
  }
};

export default getYoutubeVideos;
