/**
 * Write a script to manage the login form.
 * 
 * Form submission (form.login-form) must be processed on the submit event.
   The page must not reload when the form is submitted.
   If the form has empty fields, display alert saying that all fields must be filled in.
   As soon as the user has filled in all the fields and submitted the form, collect the field 
   values into an object, where the field name will be the property name and the field value 
   will be the property value. Use the elements property to access form elements.
   Display the object with the entered data in the console and clear the values of the form 
   fields using the reset method.

 */

const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  }

  const formData = new FormData(event.currentTarget);
  const userData = {};
  formData.forEach((value, name) => {
    userData[name] = value;
  });
  console.log(userData);

  if (email.value !== "" && password.value !== "") {
    event.currentTarget.reset();
  }
}
