var canvas = document.querySelector('canvas');
var contextVar = canvas.getContext('2d')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var images = [];
images.length = 10;

for (var i = 1; i < images.length; i++) {
    images[i] = new Image();
    images[i].src = 'Walk (' + i.toString() + ').png';
}

var i = 1;

setInterval(function() {
    i++
    if(i>=10){
        i=1;
    }
    contextVar.drawImage(images[i], 100, 100, 100, 100)
}, 100);