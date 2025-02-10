// Function to move the "No" button to a random location
function moveRandomEl(elm) {
    elm.style.position = "absolute"; // Use absolute positioning to move the element
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%"; // Random position (5% to 95%)
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%"; // Random position (5% to 95%)
}

// Select the "No" button by its ID
const moveRandom = document.querySelector('#move-random');

// Add an event listener to the "No" button that moves it when clicked
moveRandom.addEventListener("click", function(e) {
    moveRandomEl(e.target); // Move the button to a random position when clicked
});
