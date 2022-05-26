import createMenu from "./components/global/createMenu.js";
import displayMessage from "./components/global/displayMessage.js";
import { getUser } from "./utils/storage.js";
import { productsUrl } from "./settings/api.js";
import { createHtmlManage } from "./components/admin/createHtmlManage.js";
import { submitNewProduct } from "./components/admin/submitNewProduct.js";
import { doLogout } from "./components/admin/doLogOut.js";
import { searchProducts } from "./components/admin/searchProducts.js";

createMenu();


const heading = document.querySelector("h1");
const username = getUser();

if (!username) {
    location.href = "/logIn.html";
}

if (username) {
    heading.innerHTML = `Hi ${username}`;
}


const logOutBtn = document.querySelector("#logOutBtn");
logOutBtn.addEventListener("click", doLogout);


const form = document.querySelector("form");
form.addEventListener("submit", submitNewProduct);


export async function displayProducts() {
    try {
        const response = await fetch(productsUrl);
        const results = await response.json();
        console.log(results);

        createHtmlManage(results);
        searchProducts(results);

    } catch (error) {
        console.log(error);
        displayMessage("error", "Something happened trying to call the API", ".message-container");
    }
};

displayProducts();