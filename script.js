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

document.addEventListener('DOMContentLoaded', function() {
    // Variables globales
    const logo = document.getElementById('logo');
    const logoParticles = document.querySelector('.logo-particles');
    const logoImg = document.querySelector('.logo-img');
    const headerLight = document.querySelector('.header-light');
    const burger = document.getElementById('burger');
    const navLinks = document.querySelector('.nav-links');
    const header = document.querySelector('.gh-header');
    const navItems = document.querySelectorAll('.nav-item');
    
    // Efecto de partículas en el logo (solo desktop)
    if (window.innerWidth > 992) {
        logo.addEventListener('mousemove', (e) => {
            const rect = logo.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            logoParticles.style.background = `radial-gradient(circle at ${x}px ${y}px, 
                rgba(255, 219, 88, 0.3) 0%, 
                transparent 80%)`;
        });

        logo.addEventListener('mouseenter', () => {
            logoParticles.style.opacity = '1';
            logoImg.style.transform = 'scale(1.1) rotate(-5deg)';
            logoImg.style.filter = 'drop-shadow(0 0 8px rgba(255, 219, 88, 0.7))';
        });

        logo.addEventListener('mouseleave', () => {
            logoParticles.style.opacity = '0';
            logoImg.style.transform = 'scale(1)';
            logoImg.style.filter = 'none';
        });
    }

    // Efecto de luz dinámica (optimizado con requestAnimationFrame)
    let lastX = 0, lastY = 0;
    let rafId;

    const followCursor = (e) => {
        lastX = e.clientX - 100;
        lastY = e.clientY - 100;
        
        if (!rafId) {
            rafId = requestAnimationFrame(updateLightPosition);
        }
    };

    const updateLightPosition = () => {
        headerLight.style.left = `${lastX}px`;
        headerLight.style.top = `${lastY}px`;
        rafId = null;
    };

    document.addEventListener('mousemove', followCursor);

    // Menú hamburguesa (mejorado para accesibilidad)
    burger.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
        burger.classList.toggle('active');
        navLinks.classList.toggle('active');
        
        // Bloqueo el scroll cuando el menú está abierto
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Animación de items del menú al abrir
    burger.addEventListener('click', function() {
        if (navLinks.classList.contains('active')) {
            navItems.forEach((item, index) => {
                item.style.animation = `fadeInUp 0.5s ease ${index * 0.1}s forwards`;
                item.style.opacity = '0';
            });
        } else {
            navItems.forEach(item => {
                item.style.animation = '';
                item.style.opacity = '';
            });
        }
    });

    // Cerrar menú al hacer clic en un enlace (móvil)
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 992) {
                burger.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
                burger.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Scroll header (optimizado con throttle)
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            const scrollY = window.scrollY || window.pageYOffset;
            
            if (scrollY > 50) {
                header.style.background = 'rgba(0, 0, 0, 0.95)';
                header.style.borderBottomColor = 'var(--mustard)';
                header.style.padding = '1rem 5%';
                logoImg.style.height = '45px';
            } else {
                header.style.background = 'rgba(0, 0, 0, 0.8)';
                header.style.borderBottomColor = 'rgba(255, 219, 88, 0.2)';
                header.style.padding = '1.5rem 5%';
                logoImg.style.height = '50px';
            }
        }, 10);
    });

    // Efecto hover en enlaces (mejorado)
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.querySelector('.link-hover').style.transform = 'translateX(0)';
            this.querySelector('.link-text').style.transform = 'translateY(-3px)';
            this.querySelector('.link-text').style.color = 'var(--mustard)';
        });

        link.addEventListener('mouseleave', function() {
            this.querySelector('.link-hover').style.transform = 'translateX(-110%)';
            this.querySelector('.link-text').style.transform = 'translateY(0)';
            this.querySelector('.link-text').style.color = 'var(--white)';
        });
    });
});

