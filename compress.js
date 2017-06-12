
var img = new Image();

img.src = "/andrew.png";

img.onload = function() {
     var canvas = document.createElement('canvas'); // create canvas
            var ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; // fill screen
  canvas.height = window.innerHeight;
  
  document.body.appendChild(canvas); // append to site
  
  ctx.drawImage(img, 0, 0 );
  var imageData = ctx.getImageData(0, 0, img.width, img.height);
  
  
  console.log(imageData)
  
}
