import lodash from "lodash";
import PropTypes from "prop-types";

/**
 * Truncates a string and appends a '..' to it if it exceeds a specified length
 * @param {String} str String to be truncated
 * @param {Number} maxLength MaxLength of string
 * @returns {String}
 **/

const truncateString = (str, maxLength) => {
  return str.length >= maxLength ? str.slice(0, maxLength) + ".." : str;
};

truncateString.propTypes = {
  str: PropTypes.string,
  maxLength: PropTypes.number
};

/**
 * Formats video data from Youtube and splits them into main and relevant videos
 * @param {Array} videos Array of video objects
 * @returns  Nothing
 **/

export const formatVideoData = videos => {
  const formattedVideos = videos.map(video => {
    const {
      snippet: { title, thumbnails },
      id: { videoId }
    } = video;

    // HTML decode and truncate
    const decodedTitle = lodash.unescape(title);
    const capitalizedTitle =
      decodedTitle[0].toUpperCase() + decodedTitle.slice(1);
    const mainTitle = truncateString(capitalizedTitle, 200);
    const thumbnailTitle = truncateString(capitalizedTitle, 45);

    const highestQualityThumbnail =
      thumbnails.high.url || thumbnails.medium.url || thumbnails.default.url;

    return {
      title: mainTitle,
      id: videoId,
      thumbnail: highestQualityThumbnail,
      thumbnailTitle: thumbnailTitle
    };
  });

  // Split videos into main video and relevant videos
  const formattedVideoData = {
    mainVideo: formattedVideos[0],
    relevantVideos: formattedVideos.slice(1),
    ok: true
  };

  return formattedVideoData;
};

formatVideoData.propTypes = {
  videos: PropTypes.array
};
