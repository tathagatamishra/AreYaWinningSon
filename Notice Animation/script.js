var canvas = document.querySelector('canvas');
var contextVar = canvas.getContext('2d');

// Set the canvas dimensions to match the image size
canvas.width = 1920/5;
canvas.height = 1080/5;

var images = [];
images.length = 31;

// Load images into the array
for (var i = 1; i < images.length; i++) {
    images[i] = new Image();
    images[i].src = 'Assets/notice (' + i.toString() + ').png';
}

// Variable to track the current frame
var i = 1;
var animationFrameId;

// Draw the first image by default when the page loads
images[1].onload = function () {
    contextVar.drawImage(images[1], 0, 0, canvas.width, canvas.height);
};

// Function to play the animation forward
function playAnimationForward() {
    // Clear the canvas before drawing
    contextVar.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the current frame
    contextVar.drawImage(images[i], 0, 0, canvas.width, canvas.height);

    // Increment the index
    i++;

    // If the last frame is reached, stop the animation
    if (i >= 31) {
        cancelAnimationFrame(animationFrameId);
        return;
    }

    // Continue the animation
    animationFrameId = requestAnimationFrame(playAnimationForward);
}

// Function to play the animation in reverse
function playAnimationReverse() {
    // Clear the canvas before drawing
    contextVar.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the current frame
    contextVar.drawImage(images[i], 0, 0, canvas.width, canvas.height);

    // Decrement the index
    i--;

    // If the first frame is reached, stop the animation
    if (i <= 1) {
        cancelAnimationFrame(animationFrameId);
        return;
    }

    // Continue the animation
    animationFrameId = requestAnimationFrame(playAnimationReverse);
}

// Event listener for hover
canvas.addEventListener('mouseover', function () {
    cancelAnimationFrame(animationFrameId); // Stop any ongoing animation
    i = 1; // Start from the first frame
    playAnimationForward();
});

// Event listener for mouse leave
canvas.addEventListener('mouseleave', function () {
    cancelAnimationFrame(animationFrameId); // Stop any ongoing animation
    i = 30; // Start from the last frame
    playAnimationReverse();
});
