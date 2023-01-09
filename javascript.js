var i = 0;
var images = [];
var time = 2000;

// //gambar
images[0] = "html.jpg";
images[1] = "css.jpg";
images[2] = "javascript.jpg";

// //slider gulir
function changeImage() {
  document.slide.src = images[i];

  if (i<images.length-1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout('changeImage()', time);
  
}
window.onload = changeImage;


