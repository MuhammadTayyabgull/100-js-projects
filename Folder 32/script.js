const loanInput = document.querySelector('#loanInput');
const interestInput = document.querySelector('#interestInput');
const monthsInput = document.querySelector('#monthsInput');
const resultEl = document.querySelector('.result');
   
calculateLoan = () => {
    // Getting values
    const loan = parseFloat(loanInput.value)
    const interest = parseFloat(interestInput.value)
    const months = parseFloat(monthsInput.value)
    // Calculating
    const principal = loan / months
    const interestRate = interest / 100;
    const interestPayment = (loan * interestRate) / months;
    const monthlyPayment = principal + interestPayment
    resultEl.textContent = `Monthly Payment: ${monthlyPayment.toFixed(2)}`
    // avoiding NaN
    if (isNaN(monthlyPayment)) { resultEl.textContent = "Please enter a valid Number"; return}
}

[loanInput, interestInput, monthsInput].forEach(input => {
    input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            calculateLoan();
        }
        
    });
});