import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchForm = document.querySelector('.search-form');
const galleryEl = document.querySelector('.gallery');

const createGalleryCard = (imgInfo) => {
  return `
    <li class="gallery-card">
    <img class="gallery-img" src="" alt="" />
    </li>`;
};

const onFormSubmit = event => {
  event.preventDefault();
  const searchedValue = searchForm.elements.user_query.value;

  fetch(
    `https://pixabay.com/api/?key=45538852-2ab6a380c393410172122f885&q=${searchedValue}&image_type="photo&orientation="horizontal&safesearch="true"`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {})
    .catch(err => {});
};

searchForm.addEventListener('submit', onFormSubmit);
