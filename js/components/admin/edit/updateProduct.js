import displayMessage from "../../global/displayMessage.js";
import { productsUrl } from "../../../settings/api.js";
import { getToken } from "../../../utils/storage.js";
import { updateCartStorage } from "./updateCartFunctions.js";


export async function updateProduct(id, title, price, description, featured, image) {
    const url = productsUrl + id;
    const data = JSON.stringify({
        title: title,
        price: price,
        description: description,
        image: image,
        featured: featured
    });

    const token = getToken();

    const options = {
        method: "PUT",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
    };

    try {
        const messageContainer = document.querySelector(".message-container");

        const response = await fetch(url, options);
        const json = await response.json();

        if (json.updated_at) {
            updateCartStorage(id, title, price, image)
            displayMessage("alert-success", `Successfully updated`, ".message-container");

            setTimeout(function() {
                messageContainer.innerHTML = "";
            }, 5000);

        }
    } catch (error) {
        console.log(error);
        displayMessage("alert-danger", "Something went wrong. Please try again.", ".message-container");
    }
}