const bgImage = document.querySelector('.bg-image');


window.addEventListener('scroll', () => {
    updateImage();
});
function updateImage () {
    const offset = pageYOffset;
    bgImage.style.opacity = 1 - offset / 900;
    bgImage.style.backgroundSize = 160 - offset/12 + '%';
}