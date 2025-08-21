const menuToggle = document.querySelector("#menuToggle");
const arrowIcon = document.querySelector(".arrow-icon");
const menuList = document.querySelector("#menuList");
const selectedContent = document.querySelector("#menuToggle .selected-content");
const boxes = document.querySelectorAll("#menuList .box");

menuToggle.addEventListener('click', () => {
  menuList.classList.toggle('show');
  arrowIcon.classList.toggle('rotate');
});

boxes.forEach(box => {
  box.addEventListener('click', () => {
    const dataName = box.getAttribute('data-name');
    const iconHTML = box.querySelector(".icon i").outerHTML;

    selectedContent.innerHTML = `${iconHTML} <span class="text">${dataName}</span>`;

    // Close the menu
    menuList.classList.remove('show');
    arrowIcon.classList.remove('rotate');
  });
});
