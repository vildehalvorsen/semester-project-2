import createMenu from "./components/global/createMenu.js";
import { submitUpdate } from "./components/admin/edit/submitUpdate.js";
import { productsUrl } from "./settings/api.js";
import { deleteProduct } from "./components/admin/edit/deleteProduct.js";

createMenu();

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
    document.location.href = "/logIn.html";
}

const form = document.querySelector("form");
form.addEventListener("submit", submitUpdate);


(async function fetchProductDetails() {
    const url = productsUrl + id;

    const idInfo = document.querySelector("#id");
    const title = document.querySelector("#title");
    const price = document.querySelector("#price");
    const description = document.querySelector("#description");
    const featured = document.querySelector("#featured");
    const image = document.querySelector("#imageUrl");

    try {
        const response = await fetch(url);
        const details = await response.json();

        document.title = `Edit | ${details.title}`;

        title.value = details.title;
        price.value = details.price;
        description.value = details.description;
        featured.checked = details.featured;
        image.value = details.image.url;

        idInfo.value = details.id;

        deleteProduct(details.id);

    } catch (error) {
        console.log(error);
    }
})();