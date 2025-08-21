const searchBtn = document.querySelector('.btn');
const input = document.querySelector('.input');
const imageGrid = document.querySelector('.image-grid');
const showMoreBtn = document.querySelector('#showMore');

const key = '8F9XXEsXjGtUbdFUP4kUiNXHk2che-MK7rcuD15sF48';
let page = 1;
let currentQuery = "";

// Hide Show More button initially
showMoreBtn.style.display = 'none';

function fetchImages(query) {
    const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&page=${page}&per_page=12&client_id=${key}`;
    
    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (page === 1) {
                imageGrid.innerHTML = ""; // clear only on first search
            }

            data.results.forEach(photo => {
                const img = document.createElement('img');
                img.src = photo.urls.small;
                img.alt = photo.alt_description || "Unsplash image";
                imageGrid.appendChild(img);
            });

            // Show the button if there are results
            if (data.results.length > 0) {
                showMoreBtn.style.display = 'block';
            } else {
                showMoreBtn.style.display = 'none';
            }
        })
        .catch(err => console.log("Error fetching images:", err));
}

// Search button click
searchBtn.addEventListener('click', () => {
    const query = input.value.trim();
    if (query) {
        currentQuery = query;
        page = 1;
        fetchImages(currentQuery);
    }
});

// Show More button click
showMoreBtn.addEventListener('click', () => {
    page++;
    fetchImages(currentQuery);
});
