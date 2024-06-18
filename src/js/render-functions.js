'use strict';

//  ============functions==========

function imageTemplate(images) {
  return `<li class="gallery-item">
    <a class="gallery-link" href="${images.largeImageURL}">
      <img class="gallery-image" src="${images.webformatURL}" alt="${images.tags}" />
    </a>
    <ul class="info-list">
        <li class="info-item">
          <h4 class="info-item-header">Likes</h4>
          <p class="info-item-value">${images.likes}</p>
        </li>
        <li class="info-item">
          <h4 class="info-item-header">Views</h4>
          <p class="info-item-value">${images.views}</p>
        </li>
        <li class="info-item">
          <h4 class="info-item-header">Comments</h4>
          <p class="info-item-value">${images.comments}</p>
        </li>
        <li class="info-item">
          <h4 class="info-item-header">Downloads</h4>
          <p class="info-item-value">${images.downloads}</p>
        </li>
      </ul>
    </li>`;
}
export function imagesTemplate(arr) {
  return arr.map(imageTemplate).join('');
}

const loader = document.querySelector('.loader');

export function showLoader() {
  loader.classList.remove('visually-hidden');
}

export function closeLoader() {
  loader.classList.add('visually-hidden');
}
