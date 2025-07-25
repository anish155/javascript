// function addInput() {
//     const inputDiv = document.getElementById("inputs");
//     const input = document.createElement("input");
//     input.type = "number";
//     input.className = "num";
//     inputDiv.appendChild(input);
//     inputDiv.appendChild(document.createElement("br"));
// }

// function findMissing() {
//     const inputs = document.getElementsByClassName("num");
//     const numbers = Array.from(inputs).map(i => parseInt(i.value));

//     const n = numbers.length + 1;
//     const expectedSum = (n * (n + 1)) / 2;
//     const actualSum = numbers.reduce((a, b) => a + b, 0);
//     const missing = expectedSum - actualSum;

//     alert("Missing number is: " + missing);
// }

function findMissing() {
    const input = document.getElementById("nums").value;
    const numbers = input.split(',').map(num => parseInt(num.trim())).filter(n => !isNaN(n));

    const n = numbers.length + 1;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = numbers.reduce((a, b) => a + b, 0);

    const missing = expectedSum - actualSum;

    document.getElementById("missing").value = `Missing number is: ${missing}`;
}

