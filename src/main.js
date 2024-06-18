'use strict';

//  ============libraries import==========

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

//  ============functions and img import==========

import imageUrl from './img/alert-icon.svg';
import { fetchImg } from './js/pixabay-api';
import { imagesTemplate, showLoader, closeLoader } from './js/render-functions';

//  ============main const==========

const iziToastOptions = {
  message:
    'Sorry, there are no images matching your search query. Please, try again!',
  messageColor: 'white',
  backgroundColor: '#EF4040',
  iconUrl: imageUrl,
  maxWidth: '360px',
  position: 'topRight',
  theme: 'dark',
};

const lightBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');

//  ============functions==========

form.addEventListener('submit', formElemSubmit);

function formElemSubmit(e) {
  e.preventDefault();
  gallery.innerHTML = '';
  showLoader();
  const inputData = e.target.elements.searchImg.value;
  fetchImg(inputData)
    .then(data => {
      if (data.hits.length == 0) iziToast.show(iziToastOptions);

      console.log(data.hits);
      const markup = imagesTemplate(data.hits);
      gallery.innerHTML = markup;
      lightBox.refresh();
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      closeLoader();
    });
}
