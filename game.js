// JavaScript file: game.js

// Function to update the main game text
function updateGameText(text) {
    document.getElementById('game-text').innerText = text;
}

// Function to update the marquee display
function updateMarqueeText(marq) {
    document.getElementById('marquee').innerText = marq;
}

// Example: Update text when buttons are clicked
document.querySelectorAll('.game-button').forEach(button => {
    button.addEventListener('click', () => {
        updateGameText("You pressed " + button.innerText);
        updateMarqueeText("Here's a tip for " + button.innerText);
    });
});