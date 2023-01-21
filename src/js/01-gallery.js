// Add imports above this line
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

const newGallery = images =>
  images
    .map(
      ({
        preview,
        original,
        description,
      }) => `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    )
    .join('');

galleryEl.insertAdjacentHTML('beforeend', newGallery(galleryItems));

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
