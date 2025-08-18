const btn = document.querySelector('button')
const bgVideo = document.querySelector('.bg-video')
const preloader = document.querySelector('.preloader')
const iconToggle = document.querySelector('.iconToggle')
const main = document.querySelector('.main')

document.addEventListener('DOMContentLoaded', () => { 
    console.log('DOM loaded');
    preloader.style.display = 'none';
    main.classList.remove('invisible')
    bgVideo.play();
})

btn.addEventListener('click', () => {
    if (bgVideo.paused) {
        bgVideo.play()
        iconToggle.classList.add('fa-pause')
        iconToggle.classList.remove('fa-play')
    } else {
        bgVideo.pause()
        iconToggle.classList.remove('fa-pause')
        iconToggle.classList.add('fa-play')
    }
    
})