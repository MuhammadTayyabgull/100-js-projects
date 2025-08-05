const score = document.querySelector('.score');
let num1 = document.querySelector('.num1');
let num2 = document.querySelector('.num2');
const input = document.querySelector('#answer');
const submit = document.querySelector('#submit');
formSubmit = document.querySelector('#formSubmit')
let randomNumber1;
let randomNumber2;
let scoreCount = 0;

formSubmit.addEventListener('submit', (e) => {
    e.preventDefault();
})
function updateScore () {
    score.textContent = scoreCount;
}

newQuestion = () => {
    randomNumber1 = Math.floor(Math.random() * 10 + 1);
    randomNumber2 = Math.floor(Math.random() * 10 + 1);
    num1.textContent = randomNumber1;
    num2.textContent = randomNumber2;
    input.value = "";
    input.focus();
    
}

newQuestion();
updateScore();


submit.addEventListener('click', () => {
    if (input.value === (randomNumber1 * randomNumber2).toString())
    { 
        scoreCount ++;

    } else {
        scoreCount --;
    }
    updateScore();
    newQuestion();
})
