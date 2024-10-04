// Smooth slide-in effect for the skills list items
const skillItems = document.querySelectorAll('.skills-list li');
let delay = 0.5;

skillItems.forEach((item) => {
    item.style.transition = `transform 0.3s ${delay}s ease-out`;
    item.style.opacity = 0;
    setTimeout(() => {
        item.style.opacity = 1;
        item.style.transform = 'translateY(0)';
    }, delay * 1000);
    delay += 0.2;
});

// Contact details fade-in animation
window.addEventListener('load', () => {
    const footer = document.querySelector('.footer');
    footer.style.opacity = 0;
    footer.style.transition = 'opacity 1.5s ease-in-out';
    setTimeout(() => {
        footer.style.opacity = 1;
    }, 1000);
});