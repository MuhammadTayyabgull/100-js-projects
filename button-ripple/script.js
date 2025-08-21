const btn = document.querySelector('#btn');
let ripple;

btn.style.position = 'relative';
btn.style.overflow = 'hidden';

// Create ripple on mousedown
btn.addEventListener('mouseover', (event) => {
    if (ripple) ripple.remove(); // remove old ripple if any

    ripple = document.createElement('span');
    ripple.classList.add('ripple');

    const rect = btn.getBoundingClientRect();
    const size = Math.max(btn.clientWidth, btn.clientHeight);

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${event.clientY - rect.top - size / 2}px`;

    btn.appendChild(ripple);
});

// Shrink ripple when mouse leaves
btn.addEventListener('mouseleave', () => {
    if (ripple) {
        ripple.classList.add('shrink');
        ripple.addEventListener('animationend', () => ripple.remove(), { once: true });
    }
});
