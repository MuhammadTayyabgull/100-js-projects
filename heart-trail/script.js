document.addEventListener('mousemove', function (e) {
    // capturing position of mouse
    const positionX = e.clientX;
    const positionY = e.clientY;
    // creating heart
    const heart =  document.createElement('span')
    heart.classList.add('heart')
    heart.style.left = positionX + 'px';
    heart.style.top = positionY + 'px';
    heart.style.position = 'absolute';
    // randomizing size
    const size = Math.floor(Math.random() * (100 - 20) +20)
    heart.style.width = size + 'px';
    heart.style.height = size + 'px';
    document.body.appendChild(heart);
    heart.addEventListener('animationend', function (e) {
        e.target.remove();
    })
})