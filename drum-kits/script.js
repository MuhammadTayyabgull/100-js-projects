const drumBoxes = document.querySelectorAll('.drum-box');

drumBoxes.forEach(drumBox => {
    drumBox.addEventListener('click', () => { 

        const sound = new Audio(drumBox.dataset.sound);
        sound.currentTime = 0;
        sound.play();

        drumBox.classList.add('active');

        setTimeout(() => {
            drumBox.classList.remove('active');
        }, 100);
})
});