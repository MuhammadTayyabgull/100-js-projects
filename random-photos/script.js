const accessKey = "8F9XXEsXjGtUbdFUP4kUiNXHk2che-MK7rcuD15sF48"; 
const photoGrid = document.getElementById("photoGrid");
const loadMoreBtn = document.getElementById("loadMoreBtn");

const perPage = 12;

async function fetchPhotos() {
  const url = `https://api.unsplash.com/photos/random?client_id=${accessKey}&count=${perPage}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    data.forEach(photo => {
      const img = document.createElement("img");
      img.src = photo.urls.small;
      img.alt = photo.alt_description || "Unsplash Photo";
      img.classList.add("gallery-img");

      photoGrid.appendChild(img); 
    });

  } catch (error) {
    console.error("Error fetching photos:", error);
    alert("Failed to fetch photos. Check your internet.");
  }
}

fetchPhotos();
loadMoreBtn.addEventListener("click", fetchPhotos);

