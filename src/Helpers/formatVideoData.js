import lodash from "lodash";

// Truncates a string and adds a ".." to it if it exceeds the max length
const truncateString = (str, maxLength) => {
  return str.length >= maxLength ? str.slice(0, maxLength) + ".." : str;
};

// Formats video data from Youtube and splits them into main and relevant videos
const formatVideoData = videos => {
  const formattedVideos = videos.map(video => {
    const { snippet: { title, thumbnails }, id: { videoId } } = video;

    // HTML decode and truncate
    const decodedTitle = lodash.unescape(title);
    const capitalizedTitle = decodedTitle[0].toUpperCase() + decodedTitle.slice(1);
    const mainTitle = truncateString(capitalizedTitle, 200)
    const thumbnailTitle = truncateString(capitalizedTitle, 45);

    const highestQualityThumbnail = thumbnails.high.url || thumbnails.medium.url || thumbnails.default.url;

    return {
      title: mainTitle,
      id: videoId,
      thumbnail: highestQualityThumbnail,
      thumbnailTitle: thumbnailTitle
    };
  });

  // Split videos into main and relevant
  const formattedVideoData = {
    mainVideo: formattedVideos[0],
    relevantVideos: formattedVideos.slice(1),
    ok: true
  };

  return formattedVideoData;
};

export default formatVideoData;
