// Modal elements
const modal = document.getElementById("itemModal");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let currentSlide = 0;

// Open modal only when clicking Buldak Carbonara
document.querySelectorAll(".item-box").forEach(box => {
    const title = box.querySelector("h1").innerText;
    if (title === "Buldak - Carbonara") {
        box.addEventListener("click", () => {
            modal.style.display = "flex";
            showSlide(0); // start from first image
        });
    }
});

// Close modal (X button)
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal if clicking outside content
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Slider functions
function showSlide(index) {
    const slides = document.querySelectorAll(".slides img");
    slides.forEach((img, i) => {
        img.classList.remove("active");
        if (i === index) {
            img.classList.add("active");
        }
    });
    currentSlide = index;
}

function changeSlide(step) {
    const slides = document.querySelectorAll(".slides img");
    currentSlide = (currentSlide + step + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Prev/Next buttons
prevBtn.addEventListener("click", () => changeSlide(-1));
nextBtn.addEventListener("click", () => changeSlide(1));
