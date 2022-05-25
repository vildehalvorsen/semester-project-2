import displayMessage from "../global/displayMessage.js";
import { addNewProduct } from "./addNewProduct.js";

export function submitNewProduct() {
    event.preventDefault();

    const title = document.querySelector("#title");
    const price = document.querySelector("#price");
    const description = document.querySelector("#description");
    const featured = document.querySelector("#featured");
    const image = document.querySelector("#imageUrl");
    const messageContainer = document.querySelector(".message-container");

    messageContainer.innerHTML = "";

    const titleValue = title.value.trim();
    const priceValue = price.value.trim();
    const descriptionValue = description.value.trim();
    const featuredValue = featured.checked;
    let imageValue = image.value.trim();

    if (!imageValue) {
        imageValue = "placeholder.jpg";
    }

    if (titleValue.length === 0 || priceValue.length === 0) {
        return displayMessage("warning", "Title and price are required", ".message-container");
    }

    if (titleValue.length < 2) {
        return displayMessage("warning", "Title must be more than 2 characters", ".message-container");
    }

    addNewProduct(titleValue, parseInt(priceValue), descriptionValue, featuredValue, imageValue);
}