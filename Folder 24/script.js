window.addEventListener('load', () => {   
    const numbers = document.querySelectorAll('.number');
    numbers.forEach(number => {
       let count = 0;
       const target = +number.getAttribute('data-target'); 

       function updateCount() {
        count += target / 60;
        number.textContent = Math.floor(count);
        if (count < target) {
            requestAnimationFrame(updateCount)
        
       } else {
            number.textContent = target;
       }
       }
       updateCount();
    });
    });


