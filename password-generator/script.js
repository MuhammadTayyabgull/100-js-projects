input = document.querySelector('#input');
button = document.querySelector('#button');
copyToast = document.querySelector('#copyToast');
copyIcon = document.querySelector('#copyIcon');

// flag to stop animation 
let isAnimating = false
// generate password with a button click

button.addEventListener('click', () => {
    input.value = generatePassword(8);
 })
 window.addEventListener('load', () => {
    copyToast.classList.remove('show')
    copyToast.style.display = 'none'
 })

function generatePassword (length) {
   let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-="
   let password = "";
   for (let char = 0; char < length; char++) {
      let randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
   }
   input.value = password
   return password

}

copyIcon.addEventListener('click', () => {
    if (isAnimating) return
    // copy the password to clipboard
    navigator.clipboard.writeText(input.value).then(() => {
        isAnimating = true
        // show toast 
        copyToast.classList.remove('show')
        copyToast.style.display = 'none'
        // force reflow
        void copyToast.offsetWidth;
        // show the toast
        copyToast.classList.add('show')
        copyToast.style.display = 'block'
        // auto hide the toast
        setTimeout(() => {
            copyToast.classList.remove('show')
            copyToast.style.display = 'none'
            isAnimating = false
        }, 2000);

    }).catch(() => {
        copyToast.classList.remove('show')
        copyToast.style.display = 'none'
    });



})


