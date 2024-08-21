import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

import { createGalleryCard } from './js/render-functions';
import { fetchImages } from './js/pixabay-api';

const searchForm = document.querySelector('.search-form');
const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');

const onFormSubmit = event => {
  event.preventDefault();
  galleryEl.innerHTML = '';
  loaderEl.classList.remove('is-hidden');
  const searchedValue = searchForm.elements.user_query.value;
  if (searchedValue === '') {
    iziToast.warning({
      title: 'Caution',
      message: 'Fill in the search field',
      timeout: 2000,
      position: 'topCenter',
    });
    return;
  }

  fetchImages(searchedValue)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'bottomCenter',
          timeout: 2000,
        });
        galleryEl.innerHTML = '';
        searchForm.reset();

        return;
      }
      loaderEl.classList.add('is-hidden');
      
      const galleryCardsTemplate = data.hits
        .map(imgDetails => createGalleryCard(imgDetails))
        .join('');
      galleryEl.innerHTML = galleryCardsTemplate;

      new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
        overlayOpacity: 0.8,
      }).refresh();
      searchForm.reset();
    })
    .catch(err => {});
};

searchForm.addEventListener('submit', onFormSubmit);
