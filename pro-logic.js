
/**
 * ===============================================================
 *             PROFESSIONAL GLOBAL LOGIC by The Architect
 * ===============================================================
 * This script centralizes key functionalities for the Al-Barq project:
 * 1. Theme Management (Light/Dark Mode)
 * 2. Global Cart State Management
 * 3. Mobile Navigation Menu
 * ===============================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    const alBarq = {
        init() {
            this.setupTheme();
            this.setupMobileMenu();
            this.updateCartCounter();
            this.initAnimations();
            console.log("Al-Barq Professional Logic Initialized.");
        },

        // 1. Theme Management
        setupTheme() {
            const themeSwitcher = document.getElementById('theme-switcher');
            this.currentTheme = localStorage.getItem('theme') || 'light';
            document.documentElement.setAttribute('data-theme', this.currentTheme);

            if (themeSwitcher) {
                themeSwitcher.addEventListener('click', () => {
                    this.currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
                    localStorage.setItem('theme', this.currentTheme);
                    document.documentElement.setAttribute('data-theme', this.currentTheme);
                });
            }
        },

        // 2. Mobile Menu Management
        setupMobileMenu() {
            const menuToggle = document.getElementById('mobile-menu-toggle');
            const mobileMenu = document.getElementById('mobile-menu');
            const menuOverlay = document.getElementById('mobile-menu-overlay');
            const closeButton = document.getElementById('mobile-menu-close');

            if (menuToggle && mobileMenu) {
                menuToggle.addEventListener('click', () => {
                    mobileMenu.classList.add('open');
                });

                const closeMenu = () => {
                     mobileMenu.classList.remove('open');
                }

                if(menuOverlay) menuOverlay.addEventListener('click', closeMenu);
                if(closeButton) closeButton.addEventListener('click', closeMenu);
            }
        },

        // 3. Global Cart Management
        getCart() {
            try {
                return JSON.parse(localStorage.getItem('cart')) || [];
            } catch (e) {
                console.error("Error parsing cart from localStorage", e);
                return []; // Return empty cart on error
            }
        },

        updateCartCounter() {
            const cart = this.getCart();
            const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
            const cartCounters = document.querySelectorAll('.cart-count');

            cartCounters.forEach(counter => {
                counter.textContent = totalItems;
                counter.style.display = totalItems > 0 ? 'flex' : 'none';
            });
        },

        // 4. Reveal Animations
        initAnimations() {
            const revealElements = document.querySelectorAll('.reveal-on-load');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                    }
                });
            }, { threshold: 0.1 });

            revealElements.forEach(el => observer.observe(el));
        }
    };

    // Expose alBarq to the global window object if needed
    window.alBarq = alBarq;
    // Initialize the logic
    window.alBarq.init();
});
