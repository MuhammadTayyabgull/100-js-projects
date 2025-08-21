const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');
const steps = document.querySelectorAll('.step');
const lines = document.querySelectorAll('.line');
currentStep = 0;


updateSteps();


nextBtn.addEventListener('click', () => {
    if (currentStep < steps.length -1) {
        currentStep++;
        updateSteps()
    }

})


prevBtn.addEventListener('click', () => {
    if (currentStep > 0) {
        currentStep--;
        updateSteps()
    }
})



function updateSteps() {
    
    steps.forEach((step,index) => {
        const circle = step.querySelector('.circle');
        const line = step.querySelector('.line');
        if (index <= currentStep) {
            circle.classList.add('checked')
            circle.innerHTML = `<i class="fa-solid fa-check"></i>`
        } else {
            circle.classList.remove('checked')
            circle.innerHTML = `<i class="fa-solid fa-x"></i>`
        }
        if (line) {
        if (index < currentStep) {
            line.classList.add('checked')
        } else {
            line.classList.remove('checked')
        }
    }
})
    
    
       prev.disabled = currentStep === 0;
       next.disabled = currentStep === steps.length - 1;


        
        }
    
