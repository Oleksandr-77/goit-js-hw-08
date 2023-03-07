// Add imports above this line
import { galleryItems } from './gallery-items';
// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

const galleryEl = document.querySelector('.gallery');

const makeGalleryCard =({
    preview,
    original,
    description,
}) => `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
    </a></li>`;

 const markupGallery = galleryItems.map((data) => makeGalleryCard(data)).join('');

 galleryEl.insertAdjacentHTML('afterbegin', markupGallery);

//  Ініціалізація бібліотеки після створення і додання елементів галереї у div.gallery.

 let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });

  galleryEl.setAttribute(
    'style',
    'list-style:none; padding: 30px;'
  );

  // justify-content: space-between; display: flex; gap: 30px;