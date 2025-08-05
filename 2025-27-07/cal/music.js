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

let autoPlayEnabled = false;

function toggleAutoPlay() {
    autoPlayEnabled = !autoPlayEnabled;
    const btn = document.getElementById("autoPlayBtn");

    if (autoPlayEnabled) {
        btn.textContent = "Auto: ON";
        btn.classList.add("on");
    } else {
        btn.textContent = "Auto: OFF";
        btn.classList.remove("on");
    }
}


bottomAudio.addEventListener("ended", () => {
    if (autoPlayEnabled) {
        playNextVisibleSong();
    }
});

function playNextVisibleSong() {
    const visibleCards = Array.from(musicCards).filter(card => card.style.display !== "none");

    const currentSrc = bottomAudio.src;
    const currentIndex = visibleCards.findIndex(card => {
        const source = card.querySelector("audio source");
        return source && source.src === currentSrc;
    });

    const nextIndex = currentIndex + 1;

    if (nextIndex < visibleCards.length) {
        const nextCard = visibleCards[nextIndex];
        const audioSource = nextCard.querySelector("audio source").src;
        const img = nextCard.querySelector("img").src;
        const titleText = nextCard.querySelector("p").textContent;
        const [title, artist] = titleText.split(" – ");

        bottomAudio.src = audioSource;
        bottomAudio.load();
        bottomAudio.play().catch(err => console.log("Autoplay blocked:", err));

        bottomArt.src = img;
        bottomTitle.textContent = title;
        bottomArtist.textContent = artist;
    } else {
        console.log("Reached end of visible songs.");
    }
}
