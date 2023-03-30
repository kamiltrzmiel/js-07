import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

for (const image of galleryItems) {
  const listEl = `<div class="gallery__item">
    <a class="gallery__link" href="${image.original}">
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

galleryEl.addEventListener('click', e => {
  const instance = basicLightbox.create(`<img src=${e.target.dataset.source}>`);
  instance.show();

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' || 'Space') {
      instance.close();
    }
  });
});
