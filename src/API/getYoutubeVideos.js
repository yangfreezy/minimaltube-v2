import axios from "axios";

// Queries Youtube API returning 21 videos

const getYoutubeVideos = async search => {
  try {
    const { data } = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          maxResults: 21,
          q: search,
          key: process.env.REACT_APP_YOUTUBE_API_KEY
        }
      }
    );
    data.ok = true;
    return data;
  } catch (err) {
    console.error(err);
    return { data: { ok: false } };
  }
};

export default getYoutubeVideos;
