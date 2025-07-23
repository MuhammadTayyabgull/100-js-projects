const timer = document.querySelector('.timer');
const startBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');
const resetBtn = document.querySelector('#reset');


let totalTime = 1500;
let timerInterval;


let remainingTime = totalTime;
isRunning = false

function updateTimer() {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = Math.floor(remainingTime % 60);
    timer.textContent = `${minutes} : ${seconds < 10 ? '0' : ''}${seconds}`
}

startBtn.addEventListener('click', () => {
    if (isRunning) return 
    isRunning = true;

    if (timerInterval) return;

    timerInterval = setInterval(() => {
        if(remainingTime <= 0) {
            clearInterval(timerInterval);
            timer.textContent = 'Time is up!';
        } else {
            updateTimer(); 
            remainingTime--;
        }
    }, 1000);

   updateTimer();
});

pauseBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
    isRunning = false
})


resetBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval= null;
    remainingTime = totalTime;
    updateTimer();
})