/**
 * Write a script that, when typing in the input#name-input input (input event), 
 * substitutes its current value into span#name-output. If the input is empty, 
 * the span should display the "Anonymous" string.

 */

const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (!event.currentTarget.value) {
    outputEl.textContent = "Anonymous";
    return;
  }

  outputEl.textContent = event.currentTarget.value;
}
