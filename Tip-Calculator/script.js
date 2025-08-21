const billAmount = document.querySelector('#Bill-Amount');
const tipPercentage = document.querySelector('#Tip-Percentage');
const calculateButton = document.querySelector('button');
const totalAmount = document.querySelector('#Total-Amount');
result = document.querySelector('.result')
function calCulateTip () {
    const bill = parseFloat(billAmount.value)
    const tip = parseFloat(tipPercentage.value)
    if (isNaN(bill) || (isNaN(tip)) ) {
        result.textContent = "Please enter a valid Number"
        return
    } else {
        const tipAmount = (tip * bill) / 100;
        const total = bill + tipAmount;
        result.textContent = `Tip: ${total.toFixed(2)}`
    }
    
}
calculateButton.onclick = calCulateTip;
