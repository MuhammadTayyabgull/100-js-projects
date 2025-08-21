const searchBtn = document.querySelector('.search-btn');
const searchContainer = document.querySelector('.search-container');
const searchInput = document.querySelector('.search-input');
const micBtn = document.querySelector('.mic-btn');
let isOpen = false;
searchBtn.addEventListener('click', () => {
    if (isOpen) {
        searchInput.classList.add('collapse')
        micBtn.classList.add('collapse')
        searchContainer.style.width = '50px'
    }
    else {
        searchInput.classList.remove('collapse')
        micBtn.classList.remove('collapse')
        searchContainer.style.width = '300px'
    }
    isOpen = !isOpen
})