const monthNameEl = document.querySelector('.month-name');
const dayNameEl  = document.querySelector('.day-name');
const dayNumberEl = document.querySelector('.day-number');
const yearEl = document.querySelector('.year');

const today = new Date();

const monthName = today.toLocaleString('default', { month: 'long'});
const dayName = today.toLocaleString('default', { weekday: 'long'});
const dayNumber = today.getDate();
const year = today.getFullYear();

monthNameEl.textContent = monthName
dayNameEl.textContent = dayName
dayNumberEl.textContent = dayNumber
yearEl.textContent = year