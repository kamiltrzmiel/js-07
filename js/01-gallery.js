import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

for (const image of galleryItems) {
  const listEl = `<div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
      <img
        class="gallery__image"
        src=${image.preview}
        data-source=${image.original}
        alt=${image.description}
      />
    </a>
  </div>`;

  galleryEl.insertAdjacentHTML('beforeend', listEl);
  galleryEl.addEventListener('click', e => e.preventDefault());
}
