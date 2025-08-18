const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const popup = document.getElementById('popup');

openBtn.addEventListener('click', () => {
  popup.classList.remove('opacity-0', 'invisible', 'scale-90');
  popup.classList.add('opacity-100', 'visible', 'scale-100');
});

closeBtn.addEventListener('click', () => {
  popup.classList.add('opacity-0', 'invisible', 'scale-90');
  popup.classList.remove('opacity-100', 'visible', 'scale-100');
});