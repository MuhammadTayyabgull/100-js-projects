const textInput = document.querySelector('#textInput')
const totalText = document.querySelector('.total')
const remainingText = document.querySelector('.remaining')

const maxChars = 100;
textInput.addEventListener('input', () => {

    if (textInput.value.length > maxChars) {
        textInput.value = textInput.value.slice(0, maxChars);
    }
    // get current text
    const tyepdText = textInput.value;
    // calculate total chars typed
    const totalChars = tyepdText.length;
    // calculate remaining chars
    const  remainingChar = maxChars - totalChars;

    // display the number of total and remaining chars
    totalText.textContent = totalChars;
    remainingText.textContent = remainingChar;
    console.log("Total:", totalChars, "| Remaining:", remainingChar);
    

})

