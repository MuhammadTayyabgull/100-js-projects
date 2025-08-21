const result = document.querySelector('#result');

let currentInput = '';
let previousInput = '';
let operator = '';
let finalResult = '';

document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener('click', () => {
        const value = btn.textContent;
        
        
        if (btn.classList.contains('calc-btn')) {
            if (value === '.' && currentInput.includes('.')) return;
            currentInput += value;
            result.value = previousInput + operator + currentInput;
        }

        
        else if (['+', '-', '*', '/'].includes(value)) {
            if (previousInput !== '' && currentInput !== '') {
                // perform the previous calculation
                if (operator === '+') finalResult = Number(previousInput) + Number(currentInput);
                if (operator === '-') finalResult = Number(previousInput) - Number(currentInput);
                if (operator === '*') finalResult = Number(previousInput) * Number(currentInput);
                if (operator === '/') finalResult = Number(previousInput) / Number(currentInput);

                previousInput = finalResult;
                currentInput = '';
            } else if (currentInput !== '') {
                previousInput = currentInput;
                currentInput = '';
            }
            operator = value;
            result.value = previousInput + operator;
        }

        
        if (value === '=') {
            if (operator === '+') finalResult = Number(previousInput) + Number(currentInput);
            if (operator === '-') finalResult = Number(previousInput) - Number(currentInput);
            if (operator === '*') finalResult = Number(previousInput) * Number(currentInput);
            if (operator === '/') finalResult = Number(previousInput) / Number(currentInput);
            if (isNaN(finalResult)) finalResult = 'Error';
            result.value = finalResult;
            previousInput = finalResult;
            currentInput = '';
            operator = '';
        }

        
        if (value === 'C') {
            currentInput = '';
            previousInput = '';
            operator = '';
            result.value = '';
            finalResult = '';
        }
    });
});