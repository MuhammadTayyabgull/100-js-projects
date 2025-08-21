const emojis = document.querySelectorAll('.emoji');
const Container = document.querySelector('.container')
const btn = document.querySelector('.btn');
const ui = document.querySelector('.ui');
const thankYouMsg = document.querySelector('#thankYouMsg');
const fdb = document.querySelector('.fdb');

emojis.forEach(emoji => {
    emoji.addEventListener('click', () => {
        emojis.forEach(e => e.classList.remove('active'));
        emoji.classList.add('active');

        selectedFeedback = emoji.querySelector('p').textContent;
    });
});


btn.addEventListener('click', () => {
    ui.classList.add('hidden');
    thankYouMsg.classList.remove('hidden');
    Container.classList.add('small')
    fdb.textContent = selectedFeedback
});