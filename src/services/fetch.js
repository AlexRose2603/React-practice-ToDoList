const API_KEY = 'fc8552deb4684537b380e1c9cb48b807';
const BASE_URL = 'https://newsapi.org/v2/everything';

export function getNews(searchText) {
  return fetch(`${BASE_URL}?q=${searchText}`, {
    headers: {
      'X-Api-Key': API_KEY,
    },
  }).then(response => response.json());
}
