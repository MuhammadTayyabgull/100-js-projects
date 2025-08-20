const hour = document.querySelector('.hour');
const min  = document.querySelector('.min');
const sec  = document.querySelector('.sec');

function updateClock() {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  const secDeg  = s * 6 -90;
  const minDeg  = m * 6 + s * 0.1 - 90;
  const hourDeg = (h % 12) * 30 + m * 0.5 -90;

  sec.style.transform  = `translateY(-50%) rotate(${secDeg}deg)`;
  min.style.transform  = `translateY(-50%) rotate(${minDeg}deg)`;
  hour.style.transform = `translateY(-50%) rotate(${hourDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();