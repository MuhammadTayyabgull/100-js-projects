const sentences = [
    "I am a YouTuber",
    "I am a Web Developer",
    "I am a Doctor",
    "I am a student"
];

let i = 0;
let j = 0;
let current = '';
let isDeleting = false;

function typeEffect () {
    const element = document.getElementById('autoText');
  if (!isDeleting && j <= sentences[i].length) {
        current = sentences[i].slice(0, j++);
    } else if (isDeleting && j >= 0) {
        current = sentences[i].slice(0, j--);
    }
    element.textContent = current;
    
    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && j === sentences[i].length + 1) {
        isDeleting = true;
        speed = 1500;
    } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % sentences.length;
    }
    setTimeout(typeEffect, speed);
    }
    typeEffect();