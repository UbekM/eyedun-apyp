/** @format */

const inputEl = document.querySelectorAll(".input");
const errorMsg = document.querySelectorAll(".error");
const emailInput = document.getElementById("input-email");
const buttonEl = document.getElementById("submit-btn");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

inputEl.forEach((input, index) => {
  input.addEventListener("blur", () => {
    if (!input.value.trim()) {
      if (index === 0) {
        errorMsg[index].textContent = "Email field cannot be empty";
      } else if (index === 1) {
        errorMsg[index].textContent = "Enter your password";
      }
      input.style.border = "1px solid red";
    } else if (index === 0 && !emailRegex.test(input.value.trim())) {
      errorMsg[index].textContent = "Enter a valid email address";
      input.style.border = "1px solid red";
    } else {
      errorMsg[index].textContent = "";
      input.style.border = "none";
    }
    validateForm();
  });
});

const validateForm = () => {
  let isValid = true;
  inputEl.forEach((input) => {
    if (!input.value.trim()) {
      isValid = false;
    }
  });
  buttonEl.disabled = !isValid;
};

window.addEventListener("DOMContentLoaded", validateForm);
