document.addEventListener("DOMContentLoaded", () => {
    const countInput = document.querySelector('#countInput');
    const btn = document.querySelector('#btn');
    const results = document.querySelector('.results');
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
  
        data.forEach(photo => {
          const img = document.createElement('img');
          img.src = photo.urls.small;
          img.alt = photo.alt_description || "Unsplash image";
          img.style.width = "100%";
          img.style.borderRadius = "10px";
          img.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
          results.appendChild(img);
        });
      }
  
      getRandomPhotos();
    });
  });
  