// Carga dinámica de galería
const galleryContainer = document.querySelector('.gallery-container');

const images = [
    'img/work1.jpg', 'img/work2.jpg', 'img/work3.jpg',
    'img/work4.jpg', 'img/work5.jpg', 'img/work6.jpg',
];

function loadGallery() {
    images.forEach(src => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `<img src="${src}" alt="Trabajo GH Stand">`;
        galleryContainer.appendChild(item);
    });
}

document.addEventListener('DOMContentLoaded', loadGallery);
