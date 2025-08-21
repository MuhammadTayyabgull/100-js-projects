const input = document.querySelector("#search");
const results = document.querySelector("#results");
const btn = document.querySelector("#btn");

async function searchCharacter(query) {
  btn.textContent = "Loading...";
  btn.disabled = true;

  try {
    const res = await fetch(`https://api.jikan.moe/v4/characters?q=${query}`);
    const data = await res.json();

    results.innerHTML = ""; 

    data.data.forEach(character => {
      const img = document.createElement("img");
      img.src = character.images.jpg.image_url;
      img.alt = character.name;
      img.className = "w-40 h-40 object-cover rounded-lg shadow-md";
      results.appendChild(img);
    });
  } catch (err) {
    results.innerHTML = `<p class="text-red-500">Error fetching images</p>`;
  } finally {
    btn.textContent = "Search";
    btn.disabled = false;
  }
}

btn.addEventListener("click", () => {
  if (input.value.trim() !== "") {
    searchCharacter(input.value);
  }
});
