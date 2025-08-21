const input = document.querySelector('.input');
const wordDef = document.querySelector('.word-def');
const spokenExpln = document.querySelector('.spoken-expln');

const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const word = input.value.trim();
        if (word.length === 0) return;

        fetch(`${url}${word}`)
            .then(res => res.json())
            .then(data => {
                wordDef.textContent = data[0].meanings[0].definitions[0].definition;
                 
                const audioUrl = data[0].phonetics
                    .map(p => p.audio)
                    .find(a => a);

                if (audioUrl) {
                    spokenExpln.src = audioUrl;
                    spokenExpln.style.display = "block"; 
                } else {
                    spokenExpln.style.display = "none";
                }
            })
            .catch(() => {
                wordDef.textContent = "Word not found.";
                spokenExpln.style.display = "none";
            });
    }
});
