const input = document.querySelector(".input");
const result = document.querySelector(".result");
const error = document.querySelector(".error");
const kgs = document.querySelector("#kilograms");


let errorTimer;
input.addEventListener('input', () => {
    let value = input.value.trim()
    if (value === "") { error.innerText = ""; kgs.innerText = ""; return}
    const inputVal =   parseFloat(value)
    if (isNaN(inputVal) || inputVal < 0) {error.innerText = "Please enter a valid Number"; clearTimeout(errorTimer)
        
   
    
    errorTimer = setTimeout(() => {
        error.innerText = "";
    }, 1000)

    return
 }
     error.innerText = "";
     kgs.innerText = (inputVal * 0.453592).toFixed(2);
})
 