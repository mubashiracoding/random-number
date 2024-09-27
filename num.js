let y = Math.floor(Math.random() * 100 + 1); 
let attempts = 0;

function checkGuess() {
    let x = document.getElementById("guess").value; 
    let result = document.getElementById("result"); 
    x = Number(x);
    attempts++; 

    if (x == y) {
        result.textContent = "Congratulations! You guessed the correct number in " + attempts + " attempts.";
        y = Math.floor(Math.random() * 100 + 1); 
        attempts = 0; 
    } else if (x > y) {
        result.textContent = "Try a smaller number.";
    } else {
        result.textContent = "Try a larger number.";
    }
}
