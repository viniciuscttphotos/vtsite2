/**
 * Vinicius Theodoro - Fotografia
 * JavaScript functionality
 */

document.addEventListener('DOMContentLoaded', () => {
    // ========================================
    // Mobile Menu Toggle
    // ========================================
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // ========================================
    // Navbar Scroll Effect
    // ========================================
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });

    // ========================================
    // Smooth Scroll
    // ========================================
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    const navbarHeight = navbar.offsetHeight;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ========================================
    // Lightbox
    // ========================================
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxClose = document.getElementById('lightboxClose');
    const galleryItems = document.querySelectorAll('.galeria-item');

    // Open lightbox
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imageSrc = item.getAttribute('data-src');
            
            if (imageSrc && lightboxImage) {
                lightboxImage.src = imageSrc;
                lightboxImage.alt = item.querySelector('img').alt;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close lightbox
    const closeLightbox = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        
        // Clear image after animation
        setTimeout(() => {
            if (lightboxImage) {
                lightboxImage.src = '';
            }
        }, 300);
    };

    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    // Close on background click
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });

    // ========================================
    // Scroll Animations (Intersection Observer)
    // ========================================
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(animateOnScroll, observerOptions);

    // Elements to animate
    const animateElements = document.querySelectorAll(
        '.especialidade-card, .depoimento-card, .galeria-item, .sobre-content, .sobre-image'
    );

    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add CSS for animated elements
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // ========================================
    // Gallery Hover Effect Enhancement
    // ========================================
    galleryItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
    });

    // ========================================
    // Preload Images
    // ========================================
    const preloadImages = () => {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    };

    preloadImages();

    // ========================================
    // Active Navigation Link
    // ========================================
    const sections = document.querySelectorAll('section[id]');
    
    const updateActiveNav = () => {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    navLink.classList.add('active');
                }
            }
        });
    };

    window.addEventListener('scroll', updateActiveNav);

    // ========================================
    // Welcome Popup
    // ========================================
    const welcomePopup = document.getElementById('welcomePopup');
    const welcomePopupClose = document.getElementById('welcomePopupClose');
    
    const showWelcomePopup = () => {
        // Show popup on every page load
        setTimeout(() => {
            welcomePopup.classList.add('active');
            document.body.style.overflow = 'hidden';
        }, 500);
    };
    
    const closeWelcomePopup = () => {
        welcomePopup.classList.remove('active');
        document.body.style.overflow = '';
    };
    
    if (welcomePopup) {
        showWelcomePopup();
        
        // Close button click
        if (welcomePopupClose) {
            welcomePopupClose.addEventListener('click', closeWelcomePopup);
        }
        
        // Click outside to close
        welcomePopup.addEventListener('click', (e) => {
            if (e.target === welcomePopup) {
                closeWelcomePopup();
            }
        });
        
        // Escape key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && welcomePopup.classList.contains('active')) {
                closeWelcomePopup();
            }
        });
        
        // "Navegar no Site" button closes popup
        const browseBtn = welcomePopup.querySelector('.welcome-popup-btn-secondary');
        if (browseBtn) {
            browseBtn.addEventListener('click', (e) => {
                e.preventDefault();
                closeWelcomePopup();
                const targetId = browseBtn.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    setTimeout(() => {
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                    }, 300);
                }
            });
        }
    }

    // ========================================
    // Console Easter Egg
    // ========================================
    console.log(
        '%c📸 Vinicius Theodoro Fotografia',
        'color: #D4AF37; font-size: 20px; font-weight: bold;'
    );
    console.log(
        '%cTransformando momentos em memórias',
        'color: #B0B0B0; font-size: 12px;'
    );
});