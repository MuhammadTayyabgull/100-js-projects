toggleButton = document.querySelector('#toggleButton');
sideBar = document.querySelector('#sideBar');


let isSidebarOpen = false

toggleButton.addEventListener('click', () => {
    sideBar.style.left = sideBar.offsetLeft === 0 ? '-250px' : '0';
    isSidebarOpen = !isSidebarOpen
})