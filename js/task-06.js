/**
 * Write a script that, when focus on input is lost (blur event), 
 * checks its contents for the correct number of entered characters.
 * 
 * The number of characters in the input is specified in its data-length attribute.
   If the number of characters entered is correct, the input's border turns green, 
   or red with a wrong number.
   To add styles, use the valid and invalid CSS classes, which you can find in the task source files.

#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}
 */

const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length == inputEl.dataset.length) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
}
