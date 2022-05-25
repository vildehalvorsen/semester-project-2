import { checkEmail, checkLength } from "./loginValidation.js";
import { submitLogin } from "./submitLogin.js";
import displayMessage from "../global/displayMessage.js";

export function validateLogin() {
    event.preventDefault();

    const username = document.querySelector("#username");
    const password = document.querySelector("#password");
    const usernameError = document.querySelector("#usernameError");
    const passwordError = document.querySelector("#passwordError");

    const messageContainer = document.querySelector(".message-container");
    messageContainer.innerHTML = "";

    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if (checkEmail(usernameValue)) {
        usernameError.style.display = "none";
    } else {
        usernameError.style.display = "block";
    }

    if (checkLength(passwordValue, 5)) {
        passwordError.style.display = "none";
    } else {
        passwordError.style.display = "block";
    }

    if (usernameValue.length === 0 || passwordValue.length === 0) {
        displayMessage("warning", "Please fill in username and password", ".message-container");
    }

    if (checkEmail(usernameValue) && checkLength(passwordValue, 5)) {
        submitLogin(usernameValue, passwordValue);
    }
}