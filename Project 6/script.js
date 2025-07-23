const rollBtn = document.querySelector('.rollBtn')
const resultsDiv = document.querySelector('.results')
let rollCount = 0;

const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];


rollBtn.addEventListener('click', () => {
   rollCount++
   let randomFaces = Math.floor(Math.random() * 6) + 1
   
//    create a new roll entry 
      const rollEntry = document.createElement('div')
      rollEntry.classList.add('roll-entry')
      rollEntry.textContent =`Roll: ${rollCount}: ${randomFaces}`
//   add to results 
      resultsDiv.appendChild(rollEntry)
})
setTimeout(() => {
    dice.classList.remove('roll');
  }, 0);