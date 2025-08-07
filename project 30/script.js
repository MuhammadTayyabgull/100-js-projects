const monthNameEl = document.querySelector('.month-name');
const completeDateEl = document.querySelector('.complete-date');
const days = document.querySelector('.days');
const today = new Date();
// month name
const monthName = today.toLocaleString('default', { month : 'long' });
monthNameEl.textContent = monthName.toUpperCase();
// complete date
const day = today.toLocaleString('defaut', { weekday : 'short'})
const month = today.getMonth();
const monthShort = today.toLocaleString('default', {month : 'short'});
const date = today.getDate().toString().padStart(2, '0');
const year = today.getFullYear();
const completeDate = `${day} ${monthShort} ${date} ${year}`;
completeDateEl.textContent = completeDate;




// get the day from which the month starts 
const firstDay = new Date(year, month, 1).getDay();


for (let i = 0; i < firstDay; i++) {
    const emptyCell = document.createElement('div');
    emptyCell.textContent = '';
    emptyCell.classList.add('day');
    days.appendChild(emptyCell);
}
const totalDays = new Date(year, month + 1, 0).getDate();
for (let i = 1; i < totalDays; i++) {
   const dayCell = document.createElement('div')
   dayCell.classList.add('day');
   dayCell.textContent = i;



// highlight the day 
if (
    i === today.getDate() &&
    month === today.getMonth() &&
    year === today.getFullYear()
) {
    dayCell.style.backgroundColor = '#20B2AA';
    dayCell.style.color = '#ffffff';
}
days.appendChild(dayCell)
};