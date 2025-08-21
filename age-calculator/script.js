const dobInput = document.getElementById('dob')
const calculateBtn = document.getElementById('calculate')
const result = document.querySelector('.result')


function calculateAge (dob) {
     const today = new Date()
  const currentYear = today.getFullYear()
  const currentMonth = today.getMonth()
  const currentDate = today.getDate()

  const birthYear = dob.getFullYear()
  const birthMonth = dob.getMonth()
  const birthDate = dob.getDate()
  
   let age =  currentYear - birthYear
   if (currentMonth < birthMonth || ( currentMonth === birthMonth && currentDate < birthDate)){
      age--
   }
  
   return age
}

calculateBtn.addEventListener('click', () => {
  const dob = new Date(dobInput.value)
   const age = calculateAge(dob)
    if (isNaN(dob.getTime())) {
    return result.textContent =  'Please enter a valid date'
}
result.textContent = `You are ${age} years old`
})