// script.js

// 1. Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 2. Scroll Reveal Animation
const observerOptions = {
    threshold: 0.1 // Trigger when 10% of the element is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Select elements to animate
const hiddenElements = document.querySelectorAll('.hero-content, .bento-card, .about-text, .skills-wrapper, .contact-box');
hiddenElements.forEach((el) => {
    el.classList.add('hidden'); // Add hidden class initially
    observer.observe(el);
});