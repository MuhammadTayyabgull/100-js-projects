const buttons = document.querySelectorAll('.button');



buttons.forEach(button => {
    button.addEventListener('click', () => {
        const queryDiv = button.closest('.query')
        const answer = queryDiv.querySelector('.answer')
        const icon = button.querySelector('i');
        answer.classList.toggle('show');
        icon.classList.toggle('fa-minus');
        icon.classList.toggle('fa-plus');
     })
})
