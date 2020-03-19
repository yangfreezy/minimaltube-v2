import axios from "axios";

/**
 * Makes a get request to the Youtube API requesting 21 videos
 * @param {String} searchQuery search query
 * @returns Array of video data
 **/

export const getYoutubeVideos = async searchQuery => {
  try {
    const { data } = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          maxResults: 21,
          q: searchQuery,
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
