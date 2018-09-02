const API_URL = 'https://api.instagram.com/v1';

export function getInstagramMediaByTag(userToken, tag) {
  return `${API_URL}/tags/${tag}/media/recent?access_token=${userToken}`;
}

export function getInstagramUserMedia(userToken) {
  return `${API_URL}/users/self/media/recent/?access_token=${userToken}`;
}
