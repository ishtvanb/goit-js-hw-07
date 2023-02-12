import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

const items = [];

galleryItems.map((element) => {
    const galleryLink = document.createElement('a');
    galleryLink.classList.add('gallery__link');
    galleryLink.href = element.original;

    const galleryImg = document.createElement('img');
    galleryImg.classList.add('gallery__image');
    galleryImg.src = element.preview;
    galleryImg.setAttribute('title', element.description);
    galleryImg.alt = element.description;

    galleryLink.append(galleryImg);
    items.push(galleryLink);
});

gallery.append(...items);

new SimpleLightbox('.gallery a', {
    captionPosition: 'bottom',
    captionDelay: 250,
});
    
