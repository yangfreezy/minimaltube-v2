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
    return data;
  } catch (err) {
    console.error(err);
    err.response.data.error.errors.map(error => console.log(error.message));
    data = { ok: false, err };
    return;
  }
};

export default getYoutubeVideos;
