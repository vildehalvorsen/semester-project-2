import { createHtmlManage } from "./createHtmlManage.js";

export function searchProducts(products) {
    const searchInput = document.querySelector("#adminSearch");
    const manageContainer = document.querySelector(".products__container--manage");

    searchInput.onkeyup = function() {
        const searchTitle = event.target.value.trim().toLowerCase();

        const filteredProducts = products.filter(product => {
            if (product.title.toLowerCase().includes(searchTitle)) {
                return true;
            }

        });

        createHtmlManage(filteredProducts);

        if (filteredProducts.length === 0) {
            manageContainer.innerHTML = "No products matches your search...";
        }
    }
}