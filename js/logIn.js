import createMenu from "./components/global/createMenu.js";
import { validateLogin } from "./components/logIn/validateLogin.js";


createMenu();

const form = document.querySelector("form");
form.addEventListener("submit", validateLogin);