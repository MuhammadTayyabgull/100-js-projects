const container = document.querySelector('.image-container');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

let angle = 0;
let step = 45;
let isAnimating = false
function rotate() {
    isAnimating = true
    angle -= step;
    container.style.transform = `perspective(1000px) rotateY(${angle}deg)`;
}

next.addEventListener('click', () => {
    if(isAnimating) return 
    isAnimating = true
    rotate();
});

prev.addEventListener('click', () => {
    if(isAnimating) return
    isAnimating = true
    angle += step;
    container.style.transform = `perspective(1000px) rotateY(${angle}deg)`;
});

setInterval(rotate, 2000);

container.addEventListener('transitionend', () => {
    isAnimating = false
});