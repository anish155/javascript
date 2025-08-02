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

const bottomPlayer = document.getElementById("bottom-player");
const bottomAudio = document.getElementById("bottom-audio");
const bottomArt = document.getElementById("bottom-art");
const bottomTitle = document.getElementById("bottom-title");
const bottomArtist = document.getElementById("bottom-artist");

const musicCards = document.querySelectorAll(".music-card");

musicCards.forEach(card => {
    const audio = card.querySelector("audio");
    audio.addEventListener("play", () => {
        const img = card.querySelector("img").src;
        const titleText = card.querySelector("p").textContent;
        const [title, artist] = titleText.split(" – ");

        bottomPlayer.classList.remove("hidden");
        bottomAudio.src = audio.querySelector("source").src;
        bottomAudio.play();
        bottomArt.src = img;
        bottomTitle.textContent = title;
        bottomArtist.textContent = artist;
    });
});

function shufflePlay() {
    
    if (!bottomAudio.paused && !bottomAudio.ended) {
        
        console.log("A song is already playing. Shuffle skipped.");
        return;
    }

    const cards = Array.from(musicCards);
    const randomCard = cards[Math.floor(Math.random() * cards.length)];
    const audio = randomCard.querySelector("audio");

    
    const img = randomCard.querySelector("img").src;
    const titleText = randomCard.querySelector("p").textContent;
    const [title, artist] = titleText.split(" – ");

    
    bottomPlayer.classList.remove("hidden");
    bottomAudio.src = audio.querySelector("source").src;
    bottomAudio.play();
    bottomArt.src = img;
    bottomTitle.textContent = title;
    bottomArtist.textContent = artist;
}

