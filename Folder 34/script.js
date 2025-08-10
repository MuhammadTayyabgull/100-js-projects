const img = document.querySelectorAll('.image');
const next = document.querySelector('.right-icon');
const prev = document.querySelector('.left-icon');
const track = document.querySelector('.track');

let currentImage = 0;

function updateImage() {
    if (currentImage >= img.length) currentImage = 0;
    if (currentImage < 0) currentImage = img.length - 1;

    track.style.transform = `translateX(-${currentImage * 500}px)`;
}

// Next/Prev buttons
next.addEventListener('click', () => {
    currentImage++;
    updateImage();
});

prev.addEventListener('click', () => {
    currentImage--;
    updateImage();
});

// Auto slide
setInterval(() => {
    currentImage++;
    updateImage();
}, 2000);
