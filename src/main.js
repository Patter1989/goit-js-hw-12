'use strict';

//  ============libraries import==========

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

//  ============functions and img import==========

import imageUrl from './img/alert-icon.svg';
import { fetchImg } from './js/pixabay-api';
import { imagesTemplate} from './js/render-functions';

//  ============main const==========

const iziToastOptions = {
  message:
    "We're sorry, but you've reached the end of search results.",
  messageColor: 'white',
  backgroundColor: '#EF4040',
  iconUrl: imageUrl,
  maxWidth: '360px',
  position: 'bottomRight',
  theme: 'dark',
};

const lightBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more-btn');
const loader = document.querySelector('.loader');

let inputData = '';
let page = 0;
const perPage = 15;
let maxHits = 0;

//  ============Search button functions==========

form.addEventListener('submit', formElemSubmit);

async function formElemSubmit(e) {
  e.preventDefault();
  page = 1;
  gallery.innerHTML = '';

  

  showLoader();
  

  inputData = e.target.elements.searchImg.value.trim();
  if (!inputData) {
    showError('please write something');
    hideLoadMoreBtn();
    hideLoader()
    return;
  }
  try {
    const data = await fetchImg(inputData);
    maxHits = Math.ceil(data.totalHits / perPage);

    if (maxHits === 0) {
      showError('no matches');
      hideLoader();
      updateBtnStatus();
      return;
    }

    const markup = imagesTemplate(data.hits);
    gallery.innerHTML = markup;
    lightBox.refresh();
    showLoadMoreBtn();
  } catch {
    console.log('Error!');
  }
  hideLoader();
  updateBtnStatus();
};
// ===================load more button function==========================

loadMoreBtn.addEventListener('click', loadMoreBTNSubmit);
async function loadMoreBTNSubmit() {
  showLoader();
  hideLoadMoreBtn();
  page += 1;
  try {
    const data = await fetchImg(inputData, page);
    const markup = imagesTemplate(data.hits);
    gallery.insertAdjacentHTML('beforeend', markup);
    lightBox.refresh();
    skipElem();
  } catch {
    iziToast.show('Error!');
  }
  hideLoader();
  updateBtnStatus();
}
// =======================help functions===============================
function showLoader() {
  loader.classList.remove('visually-hidden');
}

function hideLoader() {
  loader.classList.add('visually-hidden');
}

function showLoadMoreBtn() {
  loadMoreBtn.classList.remove('visually-hidden');
}

function hideLoadMoreBtn() {
  loadMoreBtn.classList.add('visually-hidden');
}

function updateBtnStatus() {
  if (page >= maxHits) {
    hideLoadMoreBtn();
    

    if (maxHits) {
      iziToast.info(iziToastOptions);
    }
  } else {
    showLoadMoreBtn();
  }
};

function showError(message) {
  iziToast.error({
    message,
    position: 'topRight',
  });
};

function skipElem() {
  const liElem = gallery.children[0];
  const heights = liElem.getBoundingClientRect().height;
  scrollBy({
    'top': heights*2,
    'behavior': 'smooth'
  })
};


