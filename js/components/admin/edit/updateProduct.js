import displayMessage from "../../global/displayMessage.js";
import { productsUrl } from "../../../settings/api.js";
import { getToken } from "../../../utils/storage.js";
import { updateCartStorage } from "./updateCartFunctions.js";


export async function updateProduct(id, title, price, description, featured) {
    const url = productsUrl + id;
    const data = JSON.stringify({
        title: title,
        price: price,
        description: description,
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
        console.log(json);
        if (json.updated_at) {
            updateCartStorage(id, title, price)
            displayMessage("success", `Successfully updated`, ".message-container");

            setTimeout(function() {
                messageContainer.innerHTML = "";
            }, 5000);

        }
    } catch (error) {
        console.log(error);
        displayMessage("error", "Something went wrong. Please try again.", ".message-container");
    }
}