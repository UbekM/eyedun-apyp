/** @format */

const inputEl = document.querySelectorAll(".input");
const errorMsg = document.querySelectorAll(".error");
const emailInput = document.getElementById("input-email");
const buttonEl = document.getElementById("submit-btn");
const passwordEl = document.getElementById("password");
const passwordEyeEl = document.getElementById("eye");
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

const togglePassword = () => {
  if (passwordEl.type === "password") {
    passwordEl.type = "text";
    passwordEyeEl.src = "/assets/password-on.svg";
    passwordEyeEl.style="width: 3%;"
  } else {
    passwordEl.type = "password";
    passwordEyeEl.src = "/assets/password.svg";
  }
};

passwordEyeEl.addEventListener("click", togglePassword);

window.addEventListener("DOMContentLoaded", validateForm);
