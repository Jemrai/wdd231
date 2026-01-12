document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    });
});