const left = document.querySelector('.left');
const right = document.querySelector('.right');

left.addEventListener('mouseenter', () => {
    left.style.width = '70%';
    right.style.width = '30%';
})

right.addEventListener('mouseenter', () => {
    left.style.width = '30%';
    right.style.width = '70%';
})

left.addEventListener('mouseleave', () => {
    left.style.width = '50%';
    right.style.width = '50%';
})

right.addEventListener('mouseleave', () => {
    left.style.width = '50%';
    right.style.width = '50%';
})