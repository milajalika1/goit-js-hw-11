const BASE_URL = 'https://pixabay.com/api';

export const fetchImages = (searchedQuery) => {
    const urlParams = new URLSearchParams({
        key: '45538852-2ab6a380c393410172122f885',
        q: searchedQuery,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true
    });

    return fetch(
      `${BASE_URL}/?${urlParams}`
    ).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
}