loadPercent = document.querySelector('.load-percent');
loadFill = document.querySelector('.load-fill');
currentPercent = 0;
maxPercent = 100;
loadPercent.textContent = `${currentPercent}%`
loadFill.style.width = `${currentPercent}%`
setInterval(() => {
    if (currentPercent < maxPercent) {
    currentPercent++;
    loadPercent.textContent = `${currentPercent}%`;
    loadFill.style.width = `${currentPercent}%`
    } else {
        clearInterval();
    }
},30)