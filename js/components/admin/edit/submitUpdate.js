import displayMessage from "../../global/displayMessage.js";
import { updateProduct } from "./updateProduct.js";

export function submitUpdate() {
    event.preventDefault();

    const idInfo = document.querySelector("#id");
    const title = document.querySelector("#title");
    const price = document.querySelector("#price");
    const description = document.querySelector("#description");
    const featured = document.querySelector("#featured");
    // const image = document.querySelector("#imageUrl");
    const messageContainer = document.querySelector(".message-container");

    messageContainer.innerHTML = "";

    const idValue = idInfo.value;
    const titleValue = title.value.trim();
    const priceValue = price.value.trim();
    const descriptionValue = description.value.trim();
    const featuredValue = featured.checked;
    // const imageValue = image.value.trim();

    if (titleValue.length === 0 || priceValue.length === 0) {
        return displayMessage("warning", "Title and price are required", ".message-container");
    }

    if (titleValue.length < 2) {
        return displayMessage("warning", "Title must be more than 2 characters", ".message-container");
    }

    document.title = `${titleValue}`;

    updateProduct(idValue, titleValue, parseInt(priceValue), descriptionValue, featuredValue);
}