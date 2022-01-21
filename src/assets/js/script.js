let imgIndex = 1;

// shows the current image
function currentImg(imgNum) {
  displaySlides((imgIndex = imgNum));
}

// displays the images themselves
function displaySlides(imgNum) {
  let images = document.getElementsByClassName("carousel-img");
  let buttons = document.getElementsByClassName("carousel-btn");
    // loops over the images and 'hides' the styling
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  // loops over the buttons and takes the 'active' className away
  for (i = 0; i < buttons.length; i++) {
    buttons[i].className = buttons[i].className.replace(" active", "");
  }
  images[imgIndex - 1].style.display = "block";
  buttons[imgIndex - 1].className += " active";
}

displaySlides(imgIndex);