// Gallery preview code

// When a gallery-item is clicked, change the contents of gallery-preview
// to have the clicked image.
// Also add a CSS class to gallery-preview that makes it big and fullscreen

const gallerypreviewElement = document.getElementById("gallery-preview")

// Remove the old child
// Create a new image
// Add it as a child
function setImage(url) {
  if (gallerypreviewElement.firstChild) {
    gallerypreviewElement.removeChild(gallerypreviewElement.firstChild)
  }

  if (url != null) {
    const newImage = document.createElement("img")
    newImage.src = url
    gallerypreviewElement.appendChild(newImage)
  }
}


// Get a list of elements with a specific classname
const allElementsWithClassname = document.getElementsByClassName("gallery-item");
console.log(allElementsWithClassname)

// For each element, attach onclick handler

let currentlyExpanded = null;

for (let i = 0; i < allElementsWithClassname.length; i += 1) {
  const item = allElementsWithClassname.item(i); // allElementsWithClassname[i]
  item.onclick = () => {
    slideToIndex(i)
  }
};

const slides = document.getElementsByClassName("gallery-slide")

function slideToIndex(target) {
  // do out of bounds check here
  // min = 0, max = # of images
  if (target >= 0 && target < slides.length) {
    const offset = target * 100;
    currentPosition = target
    for (let i = 0; i < slides.length; i += 1) {
      slides.item(i).style.transform = `translateX(${i * 100 - offset}%)`
    }
  }
}
for (let i = 0; i < slides.length; i += 1) {
  slides.item(i).style.transform = `translateX(${i * 100}%)`
}

// When you click the left arrow, it should slide 1 to the left (from current position)
const arrowLeft = document.getElementsByClassName("arrow-left");
currentPosition = 0;
arrowLeft.item(0).onclick = () => {
  slideToIndex(currentPosition - 1)
}

const arrowRight = document.getElementsByClassName("arrow-right");
arrowRight.item(0).onclick = () => {
  // do a check before we call slideToIndex
  slideToIndex(currentPosition + 1)
}

