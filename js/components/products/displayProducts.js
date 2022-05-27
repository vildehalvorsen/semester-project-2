import { productsUrl } from "../../settings/api.js";
import { createHtml } from "./createHtml.js";
import { searchProducts } from "./searchProducts.js";
import displayMessage from "../global/displayMessage.js";

export async function displayProducts() {
    try {
        const response = await fetch(productsUrl);
        const results = await response.json();

        createHtml(results);
        searchProducts(results);

    } catch (error) {
        console.log(error);
        displayMessage("warning", "Something happened trying to call the API", ".products");
    }
}