const secretWord = "hangman";
        let guessed = Array(secretWord.length).fill("_");
        let chances = 6;

        document.getElementById("word").textContent = guessed.join(" ");
        document.getElementById("status").textContent = `Chances left: ${chances}`;

        function makeGuess() {
            const input = document.getElementById("guess");
            const letter = input.value.toLowerCase();
            input.value = "";

            if (!letter.match(/[a-z]/) || letter.length === 0) {
                alert("Please enter a valid letter!");
                return;
            }

            let correct = false;
            for (let i = 0; i < secretWord.length; i++) {
                if (secretWord[i] === letter && guessed[i] === "_") {
                    guessed[i] = letter;
                    correct = true;
                }
            }

            if (!correct) chances--;

            document.getElementById("word").textContent = guessed.join(" ");
            document.getElementById("status").textContent = `Chances left: ${chances}`;

            if (!guessed.includes("_")) {
                document.getElementById("status").textContent = "🎉 You Win!";
            } else if (chances <= 0) {
                document.getElementById("status").textContent = `💀 Game Over! Word was "${secretWord}"`;
            }
        }