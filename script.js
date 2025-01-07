// Animate progress bars on scroll
document.addEventListener('scroll', () => {
    const skillsSection = document.querySelector('#skills');
    const skillBars = document.querySelectorAll('.progress');

    if (skillsSection.getBoundingClientRect().top < window.innerHeight) {
        skillBars.forEach(bar => {
            bar.style.width = bar.style.width || bar.parentElement.dataset.width || '100%';
        });
    }
});

// Toggle mobile menu
const menuToggle = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});