toggle = document.querySelector('#darkModeToggle');
cricle = document.querySelector('.circle');
body = document.querySelector('body');

toggle.addEventListener('change', () => {
    if (toggle.checked) {
        body.style.backgroundColor = 'black';
        circle.style.transform = 'translateX(40px)';
        circle.style.backgroundColor = 'black'
    } else {
        body.style.backgroundColor = 'white'
        circle.style.transform = 'translateX(0px)';
        circle.style.backgroundColor = 'white'
    }
})