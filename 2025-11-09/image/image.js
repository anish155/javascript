function generateImage() {
    const container = document.getElementById("image-container");

    
    const randomUrl = "https://picsum.photos/300?random=" + Math.floor(Math.random() * 1000);

    container.innerHTML = `<img src="${randomUrl}" alt="Random Image">`;
}

function resetImage() {
    const container = document.getElementById("image-container");
    container.innerHTML = ""; 
}