// Find the relevant element
const element = document.getElementById("title")

/**

def handleClick():
  element.innerText = "hello from javascript"
  element.style.color = "red"

  */

// function handleTitleClick() {
//   element.innerText = "hello from javascript"
//   element.style.color = "red"
// }

// When element is clicked, call handleTitleClick
element.onclick = handleTitleClick


// When subtitle is clicked, change the text color to blue

const element_two = document.getElementById("subtitle")

function handleSubtitleClick() {
  element_two.innerText = "hello"
  element_two.style.color = "blue"
}
  
element_two.onclick = handleSubtitleClick

// When you click the button, change the title and subtitle text color to purple

const element_three = document.getElementsByClassName("home-page-button")
const first = element_three.item(0)

function handleButtonClick() {
  element.style.color = "purple"
  element_two.style.color = "purple"
}

first.onclick = handleButtonClick


let counter = 0

const counterElement = document.getElementById("counter")
const counterUp = document.getElementById("counter-up")
const counterDown = document.getElementById("counter-down")
const counter_plus_tenElement = document.getElementById("counter_plus_ten")
const counter_down_tenElement = document.getElementById("counter_down_ten")

counterUp.onclick = () => {
  counter += 1
  counterElement.innerText = "Counter: " + counter
}

counterDown.onclick = () => {
  counter -= 1
  counterElement.innerText = "Counter:" + counter
}

counter_plus_tenElement.onclick = () => {
  counter += 10
  counterElement.innerText = "Counter: " + counter
}

counter_down_tenElement.onclick = () => {
  counter -=10
  counterElement.innerText = "Counter:" + counter
}

reset_zero.onclick = () => {
  counter = 0
  counterElement.innerText = "Counter:" + counter
}