let imgIndex = 1;
displaySlides(imgIndex);

// shows the current image
function currentImg(num) {
  displaySlides((imgIndex = num));
}

function displaySlides(num) {
  let images = document.getElementsByClassName("carousel-img");
  let buttons = document.getElementsByClassName("carousel-btn");

  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }

  for (i = 0; i < buttons.length; i++) {
    buttons[i].className = buttons[i].className.replace(" active", "");
  }
  images[imgIndex - 1].style.display = "block";
  buttons[imgIndex - 1].className += " active";
}
