document.addEventListener('DOMContentLoaded', function () {
    // Animation des sections
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    sections.forEach(section => {
        observer.observe(section);
    });

    // Smooth Scroll avec correction d'offset pour le header
    const headerHeight = document.querySelector('header').offsetHeight;
    const navLinks = document.querySelectorAll('header nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').slice(1);
            const targetSection = document.getElementById(targetId);
            const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        });
    });

    // Modal & Overlay
    const overlay = document.getElementById('overlay');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    const clickableItems = document.querySelectorAll('.clickable');

    clickableItems.forEach(item => {
        item.addEventListener('click', function () {
            modalContent.innerHTML = this.innerHTML;
            overlay.classList.add('active');
            modal.classList.add('active');
        });
    });

    overlay.addEventListener('click', function () {
        overlay.classList.remove('active');
        modal.classList.remove('active');
    });

    // Toggle Navigation Menu
    const navToggle = document.querySelector('.nav-toggle');
    const navLinksContainer = document.querySelector('nav ul');

    navToggle.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
    });

    // Back to Top Button
    const backToTopButton = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
