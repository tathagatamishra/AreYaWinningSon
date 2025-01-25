var canvas = document.querySelector('canvas');
var contextVar = canvas.getContext('2d')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var images = [];
images.length = 31;

for (var i = 1; i < images.length; i++) {
    images[i] = new Image();
    images[i].src = 'Assets/notice (' + i.toString() + ').png';
}


var i = 1;

setInterval(function() {
    i++;
    if(i>=31){
        i=1;
    }
    contextVar.drawImage(images[i], 1920/10, 1080/10, 1920/10, 1080/10)
}, 100);