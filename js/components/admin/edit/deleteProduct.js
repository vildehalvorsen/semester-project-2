import displayMessage from "../../global/displayMessage.js";
import { productsUrl } from "../../../settings/api.js";
import { getToken } from "../../../utils/storage.js";
import { deleteFromCart } from "./updateCartFunctions.js";

export function deleteProduct(id) {
    const button = document.querySelector("#deleteBtn");

    button.onclick = async function() {
        console.log(id)
        const confirmDelete = confirm("Are you sure?");

        if (confirmDelete) {
            const url = productsUrl + id;

            const token = getToken();

            const options = {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            try {
                const response = await fetch(url, options);
                const json = await response.json();
                console.log(json);

                deleteFromCart(id);

                location.href = "/admin.html";
            } catch (error) {
                console.log(error);
                displayMessage("alert-danger", "Something went wrong. Please try again.", ".message-container");
            }
        }
    }
};