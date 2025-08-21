colorContainer = document.querySelector("#colorContainer");  

function getRandomColor () {
    const hex = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    return `#${hex}`;
}
// creating 30 boxes with random colors
for (let i = 0; i < 30; i++) {
    const box = document.createElement('div');
    box.classList.add('col-12', 'col-sm-6', 'col-lg-4', 'col-xl-3');
    box.style.height = "170px";
    box.style.width = "280px";

    const randomColor = getRandomColor();
    const innerBox = document.createElement('div');
    innerBox.classList.add('color-box');
    innerBox.style.backgroundColor = randomColor;
    innerBox.textContent = randomColor;

    box.appendChild(innerBox);
    colorContainer.appendChild(box);

}
