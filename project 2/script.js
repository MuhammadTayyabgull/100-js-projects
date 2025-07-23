const temperature = document.getElementById('temperature')
const from = document.getElementById('from')
const to = document.getElementById('to')
const convertBtn = document.getElementById('convertBtn')
const result = document.getElementById('result')

convertTemperature = (value, from, to) => {
    let celcius;
    if (from === 'celcius') celcius = value;
    else if (from === 'fahrenheit') celcius = (value- 32) * (5/9);
    else if (from === 'kelvin') celcius = (value - 273.15);

    if (to === 'celcius') return celcius;
    if (to === 'fahrenheit') return celcius * (9/5) + 32;
    if (to === 'kelvin') return celcius + 273.15;
}

convertBtn.addEventListener("click", () => {
    const value = parseFloat(temperature.value)
    const fromValue = from.value
    const toValue = to.value
    if (isNaN(value)) { result.innerText = "Please enter a valid Number";
    return }
    if (fromValue === toValue) {
        result.innerText = "From and To value cannot be same";
        return
    }
    const converted = convertTemperature(value, fromValue, toValue)

result.innerText = `${converted.toFixed(2)}`
    
})

// Add auto conversion add polished units later