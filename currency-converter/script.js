const input = document.querySelector('.input select');
const output = document.querySelector('.output select');
const amount = document.querySelector('#amount');
const currencyRate = document.querySelector('#rate');

let fromCurrency = input.value;
let toCurrency = output.value;
let inputAmount = amount.value;

input.addEventListener('change', () => {
    fromCurrency = input.value;
    convert();
})

output.addEventListener('change', () => {
    toCurrency = output.value;
    convert();
})

amount.addEventListener('input', () => {
    inputAmount = amount.value;
    convert();
})

function convert () {
    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
    .then(res => res.json())
    .then(data => {
      const rate =  data.rates[toCurrency]
      const total = inputAmount * rate;
      document.querySelector('.output #result').textContent = total.toFixed(2);
      currencyRate.textContent = `1 ${fromCurrency} = ${rate.toFixed(2)} ${toCurrency}`;
    })
    .catch(() => {
        document.querySelector('.output #result').textContent = "";
    })
}

convert();