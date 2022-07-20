/**
 *
 *  Write a script that changes the background colors of the <body> element via inline style
 *  when clicking on button.change-color and outputs the color value to span.color.
    
  <div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
  </div>

  Use the getRandomHexColor function to generate a random color.

*/

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");
const buttonEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

buttonEl.addEventListener("click", onTargetBtnClick);

function onTargetBtnClick() {
  const bodyStyle = (bodyEl.style.backgroundColor = getRandomHexColor());

  spanEl.textContent = bodyStyle;
}
