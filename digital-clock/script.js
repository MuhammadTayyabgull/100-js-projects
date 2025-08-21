const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const ampmEl = document.getElementById('ampm');

updateClock = () => {
const now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
let ampm = hours >= 12 ? 'PM' : 'AM';

hours = hours % 12 || 12;

hoursEl.textContent = hours;
minutesEl.textContent = minutes;
secondsEl.textContent = seconds;
ampmEl.textContent = ampm;
console.log(hours, minutes, seconds, ampm);
}

setInterval(updateClock, 1000);

updateClock();