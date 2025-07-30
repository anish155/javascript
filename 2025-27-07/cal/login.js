function openLogin() {
    document.getElementById("loginModal").classList.add("show");
}
function closeLogin() {
    document.getElementById("loginModal").classList.remove("show");
}

window.onclick = function(event) {
    let modal = document.getElementById("loginModal");
    if (event.target == modal) {
        modal.classList.remove("show");
    }
}