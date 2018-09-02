export function preprocessCardsFromData({data}) {
  const cards = data.map(item => {
    if (item.type === 'video') {
      return;
    }

    let images;

    if (item.carousel_media && item.carousel_media.length > 0) {
      // pull all images from carousel
      images = item.carousel_media.map(imageItem => ({
        standardResolution: imageItem.images.standard_resolution,
        lowResolution: imageItem.images.low_resolution
      }));
    } else {
      images = [{
        standardResolution: item.images.standard_resolution,
        lowResolution: item.images.low_resolution
      }];
    }

    // separated object for every image
    return images.map(imageItem => ({
      userName: item.user.username,
      link: item.link,
      image: imageItem
    }));
  }).reduce((result, current) => [...result, ...current], []) // flatten an array of arrays
    .reduce((result, current) => {
      result[current.userName] = [current, ...result[current.userName] || {}]; // group by userName

      return result;
    }, {});

  return cards;
}
