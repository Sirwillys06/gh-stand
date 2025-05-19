// Menú Hamburguesa (Responsive)
document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Galería Dinámica (Simulación)
const galleryContainer = document.querySelector('.gallery-container');
const loadMoreBtn = document.querySelector('#load-more');

// Imágenes de ejemplo (reemplaza con las de GH Stand)
const images = [
    'img/work1.jpg',
    'img/work2.jpg',
    'img/work3.jpg',
    'img/work4.jpg',
    'img/work5.jpg',
    'img/work6.jpg',
];

function loadGallery() {
    images.forEach(img => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `<img src="${img}" alt="Trabajo GH Stand">`;
        galleryContainer.appendChild(galleryItem);
    });
}

loadGallery();

// Smooth Scrolling para el menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Scroll suave mejorado (con offset para el navbar fijo)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        window.scrollTo({
            top: target.offsetTop - navbarHeight,
            behavior: 'smooth'
        });
    });
});

// Inicializar Swiper
const swiper = new Swiper('.swiper-container', {
    // Configuración básica
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 800,
    effect: 'slide', // También prueba 'coverflow' o 'fade'
    grabCursor: true,
    
    // Navegación
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    // Paginación
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    
    // Efecto parallax (opcional)
    parallax: true,
});

// Efecto hover para móviles (touch)
document.querySelectorAll('.swiper-slide').forEach(slide => {
    slide.addEventListener('touchstart', function() {
        this.querySelector('.image-info').style.bottom = '0';
    });
    
    slide.addEventListener('touchend', function() {
        this.querySelector('.image-info').style.bottom = '-100%';
    });
});