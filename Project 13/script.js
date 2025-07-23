navbar = document.getElementById('navbar');
topContainer = document.getElementsByClassName('top-container')[0]
window.addEventListener('scroll', () => {
topContainerHeight = topContainer.offsetHeight
    if (window.scrollY > topContainerHeight) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
})