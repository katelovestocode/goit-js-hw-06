/**
 * Write a script that responds to changes in the value of input#font-size-control (input event)
 * and changes the inline style of span#text by updating the font-size property.
 * As a result, the text size will change responding to scrollbar dragging.
 * 
 * <input id="font-size-control" type="range" min="16" max="96" />
     <br />
    <span id="text">Abracadabra!</span>
 */

const rangeEl = document.querySelector("#font-size-control");

const textEl = document.querySelector("#text");

rangeEl.addEventListener("input", onInputChange);
// or
// rangeEl.addEventListener("change", onInputChange);

function onInputChange(event) {
  textEl.style.fontSize = event.currentTarget.value + "px";
}
