box1 = document.querySelector('#box1'); 
box2 = document.querySelector('#box2');

document.addEventListener('mousemove', (e) => {
    const positionX =   e.clientX;
    const positionY = e.clientY;
    box1.textContent = positionX;
    box2.textContent = positionY;

})