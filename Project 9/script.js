minutes = document.querySelector('.minutes');
seconds = document.querySelector('.seconds');
milliseconds = document.querySelector('.milliseconds');

startBtn = document.querySelector('.startBtn');
pauseBtn = document.querySelector('.pauseBtn');
resetBtn = document.querySelector('.resetBtn');

let minutesCount = 0;
let secondsCount = 0;
let millisecondsCount = 0;

let startTimer;
let isRunning = false;


function startStopWatch() {
    if (isRunning) return
isRunning = true

startTimer = setInterval(() => {
    millisecondsCount++;

    if (millisecondsCount >= 100) {
        secondsCount++;
        millisecondsCount = 0;
    }

    if (secondsCount >= 60) {
        minutesCount ++;
        secondsCount = 0;
    }

    milliseconds.textContent = String(millisecondsCount).padStart(2, '0')
    seconds.textContent = String(secondsCount).padStart(2, '0')
    minutes.textContent = String(minutesCount).padStart(2, '0')



}, 10)

}


pauseTimer = () => {
    isRunning = false
    clearInterval(startTimer);
}

resetTimer = () => {
    isRunning = false
    clearInterval(startTimer);
    minutesCount = secondsCount = millisecondsCount = 0;
    minutes.textContent = seconds.textContent = milliseconds.textContent = '00';
}

startBtn.addEventListener('click', startStopWatch);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
