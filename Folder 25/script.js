document.addEventListener("DOMContentLoaded", () => {
  const countInput = document.querySelector('#countInput');
  const btn = document.querySelector('#btn');
  const results = document.querySelector('.results');
  const resultsContainer = document.querySelector('.results-container');
  const accessKey = "8F9XXEsXjGtUbdFUP4kUiNXHk2che-MK7rcuD15sF48";

  btn.addEventListener('click', () => {
    const count = parseInt(countInput.value);

    if (!count || count < 1 || count > 10) {
      alert("Please enter a number between 1 and 10.");
      return;
    }

    async function getRandomPhotos() {
      const res = await fetch(`https://api.unsplash.com/photos/random?count=${count}&client_id=${accessKey}`);
      const data = await res.json();

      results.innerHTML = ""; // Clear previous results
      results.classList.remove('odd-count');

      data.forEach((photo, index) => {
        const img = document.createElement('img');
        img.src = photo.urls.small;
        img.alt = photo.alt_description || "Unsplash image";
        results.appendChild(img);
      });

      if (data.length % 2 !== 0) {
        results.classList.add('odd-count');
      }

      resultsContainer.classList.add('show');
    }

    getRandomPhotos();
  });
});
