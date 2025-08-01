const emojiContainer = document.querySelector('#emojiContainer');
const emoji = document.querySelector('#emoji');
const emojiName = document.querySelector('#emojiName'); 
// fetching the emojis
let emojis = [];
async function loadEmojis () {
    try {
    const response = await fetch('emojis.json');
    emojis = await response.json();
    showRandomEmoji()
} 
catch {
    emoji.innerHTML = '❌ Could not load emojis';
    emojiName.innerHTML = 'Error 404';
    console.log('Error loading emojis');
}
}
function showRandomEmoji () {
    randomIndex = Math.floor(Math.random() * emojis.length);
    emoji.innerHTML = emojis[randomIndex].emoji;
    emojiName.innerHTML = emojis[randomIndex].description || "Unknown";

    emojiContainer.addEventListener('click', showRandomEmoji);
}
loadEmojis();