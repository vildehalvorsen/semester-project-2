import createMenu from "./components/global/createMenu.js";
import { productsUrl } from "./settings/api.js";
import { createProductHtml } from "./components/products/details/createProductHtml.js"
import { addToCart } from "./components/products/details/addToCart.js";



createMenu();

const productQuery = document.location.search;
const params = new URLSearchParams(productQuery);
export const productID = params.get("id");

(async function getProductID() {
    const response = await fetch(productsUrl + productID);
    const results = await response.json();
    console.log(results);

    document.title = results.title;

    createProductHtml(results);
    addToCart();

})();