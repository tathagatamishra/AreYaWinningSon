var canvas = document.querySelector('canvas');
var contextVar = canvas.getContext('2d');

// Set the canvas dimensions to match the image size
canvas.width = 1920;
canvas.height = 1080;

var images = [];
images.length = 31;

// Load images into the array
for (var i = 1; i < images.length; i++) {
    images[i] = new Image();
    images[i].src = 'Assets/notice (' + i.toString() + ').png';
}

var i = 1;
var animationFrameId;

// Function to play the animation once
function playAnimationOnce() {
    // Clear the canvas before drawing
    contextVar.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the current frame
    contextVar.drawImage(images[i], 0, 0, canvas.width, canvas.height);

    // Increment the index
    i++;

    // If the last frame is reached, stop the animation
    if (i >= 31) {
        cancelAnimationFrame(animationFrameId);
        i = 1; // Reset the frame index for the next hover
        return;
    }

    // Continue the animation
    animationFrameId = requestAnimationFrame(playAnimationOnce);
}

// Event listener for hover
canvas.addEventListener('mouseover', function () {
    if (!animationFrameId) { // Prevent starting the animation multiple times
        playAnimationOnce();
    }
});

// Reset the animation state on mouse leave
canvas.addEventListener('mouseleave', function () {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null; // Allow animation to restart on hover
    i = 1; // Reset the frame index
    contextVar.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
});
