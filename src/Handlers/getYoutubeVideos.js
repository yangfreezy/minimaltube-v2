import axios from "axios";

const getYoutubeVideos = async search => {
  let data;
  try {
    if (!process.env.youtube_api_key) console.error("API KEY NOT FOUND");
    data = await axios.get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        part: "snippet",
        maxResults: 6,
        q: search,
        key: process.env.youtube_api_key
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
