import displayMessage from "../global/displayMessage.js";
import { getToken } from "../../utils/storage.js";
import { productsUrl } from "../../settings/api.js";
import { displayProducts } from "../../admin.js";

export async function addNewProduct(title, price, description, featured, image) {

    const data = JSON.stringify({
        title: title,
        price: price,
        description: description,
        featured: featured,
        image: image
    });

    const token = getToken();

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
    };

    try {
        const form = document.querySelector("form");
        const messageContainer = document.querySelector(".message-container");

        const response = await fetch(productsUrl, options);
        const json = await response.json();

        if (json.created_at) {
            displayMessage("success", `You added: ${title}`, ".message-container");

            setTimeout(function() {
                messageContainer.innerHTML = "";
            }, 5000);

            form.reset();
            displayProducts();
        }

    } catch (error) {
        console.log(error);
        displayMessage("error", "Something went wrong. Please try again.", ".message-container");
    }
}