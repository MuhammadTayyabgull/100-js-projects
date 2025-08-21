const cards = document.querySelectorAll('.testimonial-card')
// grab buttons 
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function showCard(index) {
    cards.forEach(card => card.classList.remove('active'))
    cards[index].classList.add('active')
}

prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = cards.length -1;

    }
    showCard(currentIndex)
}) 
nextBtn.addEventListener('click', () => {
    currentIndex ++
if (currentIndex >= cards.length) {
    currentIndex = 0;
}
showCard(currentIndex)
})

