function filterSongs() {
    const selectedLanguage = document.getElementById("language-select").value;
    const songs = document.querySelectorAll(".music-card");

    songs.forEach(song => {
        const songLanguage = song.getAttribute("data-language");

        if (selectedLanguage === "all" || songLanguage === selectedLanguage) {
            song.style.display = "flex";
        } else {
            song.style.display = "none";
        }
    });
}

