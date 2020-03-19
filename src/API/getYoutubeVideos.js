import axios from "axios";

// Queries Youtube API returning 21 videos
/**
 * Truncates a string and appends a '..' to it if it exceeds a specified length
 * @param {String} searchQuery search query
 * @param {Number} maxLength MaxLength of string
 * @returns {String}
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
