const emojiRow = document.querySelector('.emoji-row');
const stars = document.querySelectorAll('.stars i');

function setRating(rating) {
    emojiRow.style.transform = `translateX(-${(rating - 1) * 48}px)`;

    stars.forEach((star, i) => {
        if (i < rating) {
            star.classList.add('gold');
        } else {
            star.classList.remove('gold');
        }
    });
}

stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        setRating(index + 1);
    });
});

setRating(1);
