// JavaScript file: game.js

// Function to update the main game text
function updateGameText(text) {
    document.getElementById('game-text').innerText = text;
}

// Function to update the tip display
function updateTipText(tip) {
    document.getElementById('tip-text').innerText = tip;
}

// Example: Update text when buttons are clicked
document.querySelectorAll('.game-button').forEach(button => {
    button.addEventListener('click', () => {
        updateGameText("You pressed " + button.innerText);
        updateTipText("Here's a tip for " + button.innerText);
    });
});