const counter = document.querySelector('.counter');
const minusBtn = document.querySelector('.minus-btn');
const resetBtn = document.querySelector('.reset-btn');
const plusBtn = document.querySelector('.plus-btn');

let count = 0;

minusBtn.addEventListener('click', () => {
    count--;
    counter.textContent = count;
    coloring();
})

plusBtn.addEventListener('click', () => {
    count++;
    counter.textContent = count;
    coloring();
})

resetBtn.addEventListener('click', () => {
    count = 0;
    counter.textContent = count;
    coloring();
})

function coloring () {
    if (count < 0) {
        counter.style.color = 'red';
    } else if (count > 0) {
        counter.style.color = 'green';
    } else {
        counter.style.color = 'black';
    }
}