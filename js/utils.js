/**
 * @param {string[]} array
 * @returns {string}
 */
export function getRandomValueFromArray(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

/**
 * @param {string} key
 * @returns {string}
 */
export function getUrlParam(key) {
  const query = window.location.search.substring(1);
  const params = Object.fromEntries(
    query.split('&').map(pair => pair.split('='))
  );
  return params[key];
}
