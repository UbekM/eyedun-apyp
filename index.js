/** @format */

const inputEl = document.querySelectorAll(".input");
const errorMsg = document.querySelectorAll(".error");
const emailInput = document.getElementById("input-email");

inputEl.forEach((input, index) => {
  input.addEventListener("blur", () => {
    if (!input.value.trim()) {
      if (index === 0 || index === 1) {
        errorMsg[index].textContent = "Input field cannot be empty";
      } else if (index === 2) {
        errorMsg[index].textContent = "Enter your email address";
      } else if (index === 3) {
        errorMsg[index].textContent = "Enter your phone number";
      }
      input.style.border = "1px solid red";
    } else {
      errorMsg[index].textContent = "";
      input.style.border = "none";
    }
  });
});
