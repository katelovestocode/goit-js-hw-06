/**
 *
 *  Write a script to create and clear a collection of elements.
 *  The user enters the number of elements into input and clicks the New button,
 *  after which a collection is rendered. When you click on the Clear button,
 *  the collection is cleared.
 * 
 * Create a createBoxes(amount) function that takes one parameter, a number. 
 * The function creates as many <div> as specified in amount and adds them to div#boxes.

   The dimensions of the very first <div> are 30px by 30px.
   Each element after the first one should be 10px wider and higher than the previous one.
   All elements must have a random HEX background color. Use the ready-made getRandomHexColor 
  function to get a color.
 */

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const refs = {
//   inputEl: document.querySelector("input"),
//   buttonCreateEl: document.querySelector("button[data-create]"),
//   buttonDestroyEl: document.querySelector("button[data-destroy]"),
//   divEl: document.querySelector("#boxes"),
// };
// // console.log(refs.inputEl);

// refs.buttonCreateEl.addEventListener("click", createBoxes);
// refs.buttonDestroyEl.addEventListener("click", destroyBoxes);

// function createBoxes(amount) {
//   console.log("Creating Log");
// }

// function destroyBoxes(event) {
//   console.log("Deleting Log");
// }
