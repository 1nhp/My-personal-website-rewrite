const themeButton = document.querySelector(".theme-switch")

themeButton.addEventListener('click', () => {
    document.body.classList.toggle('theme');
});