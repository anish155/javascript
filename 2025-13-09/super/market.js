window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.transition = "opacity 0.8s ease";
        setTimeout(() => { loader.style.display = "none"; }, 800);
    }, 2200); 
});
