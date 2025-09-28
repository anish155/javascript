document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
    const choice = card.dataset.choice;
    const player = card.parentElement.dataset.player;

    
    const icon = card.textContent;
    if (player === "1") {
        document.getElementById("p1-choice").textContent = icon;
    } else {
        document.getElementById("p2-choice").textContent = icon;
    }
    });
});
