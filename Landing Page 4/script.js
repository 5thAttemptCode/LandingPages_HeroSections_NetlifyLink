document.querySelector('.responsive-nav').addEventListener('click', () => {
    let nav = document.querySelector('.responsive-nav');
    nav.classList.contains('active') ? nav.classList.remove('active') : nav.classList.add('active');
});