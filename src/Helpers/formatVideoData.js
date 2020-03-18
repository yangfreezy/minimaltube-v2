import lodash from "lodash";

const truncateString = (str, maxLength) => {
  return str.length >= maxLength ? str.slice(0, maxLength) + ".." : str;
};

// Formats video data from Youtube and splits them into main and relevant videos

const formatVideoData = videos => {

  // Format videos
  let formattedVideos = videos.map(video => {

    // HTML decode and truncate
    const { snippet: { title } } = video;

    let decodedTitle = lodash.unescape(title);
    let capitalizedTitle = decodedTitle[0].toUpperCase() + decodedTitle.slice(1);

    let mainTitle = truncateString(capitalizedTitle, 200)
    let thumbnailTitle = truncateString(capitalizedTitle, 45);

    const { id: { videoId }, snippet: { thumbnails } } = video;

    let highestQualityThumbnail = thumbnails.high.url || thumbnails.medium.url || thumbnails.default.url;

    return {
      title: mainTitle,
      id: videoId,
      thumbnail: highestQualityThumbnail,
      thumbnailTitle: thumbnailTitle
    };
  });

  // Split videos into main and relevant
  let formattedVideoData = {
    mainVideo: formattedVideos[0],
    relevantVideos: formattedVideos.slice(1),
    ok: true
  };

  return formattedVideoData;
};

export default formatVideoData;
