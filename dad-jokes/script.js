const jokeEl = document.querySelector('.joke');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {

    jokeEl.textContent = 'Updating...';
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {
        jokeEl.textContent = data.joke
    })
    .catch(err => 'sorry there was an error', err)
})