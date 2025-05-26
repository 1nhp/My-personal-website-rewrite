window.addEventListener("load", () => {
    const loading1 = document.querySelector(".loading");
    loading1.style.opacity = 0;

    setTimeout ( () => {
        loading1.remove(); },
    500);
});