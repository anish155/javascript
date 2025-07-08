function validateForm() {
    const username = document.getElementById("name").value.trim();
    const password = document.getElementById("code").value;

    
    if (username.length < 3) {
        alert("Username must be at least 3 characters long.");
        return false;
    }

    
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /\d/.test(password);

    if (password.length < 6 || !hasLetter || !hasNumber) {
        alert("Password must be at least 6 characters and include both letters and numbers.");
        return false;
    }

    alert("Login successfully!");
    return true;
}
