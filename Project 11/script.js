watchBtn = document.querySelector("button");
modal = document.querySelector(".modal");
closeBtn = document.querySelector(".close");
iframe = document.querySelector("iframe");


watchBtn.addEventListener("click", () => {
    modal.style.display = "flex";
    iframe.src = "trailer.mp4";
})

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    iframe.src = "";
})
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        iframe.src = "";
    }
});