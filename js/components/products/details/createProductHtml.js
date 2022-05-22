import { apiUrl } from "../../../settings/api.js";
import { getFromStorage } from "../../../utils/storage.js";
import { productID } from "../../../products-details.js";


export function createProductHtml(results) {
    const currentList = getFromStorage("cart");
    const productExists = currentList.find(cart => cart.id === productID);

    let buttonText = "";
    if (productExists) {
        buttonText = "Remove from cart";
    } else {
        buttonText = "Add to cart";
    }

    const productContainer = document.querySelector(".product__container");
    const breadcrumbContainer = document.querySelector(".breadcrumb");

    breadcrumbContainer.innerHTML += `<li class="breadcrumb-item active">${results.title}</li>`;
    productContainer.innerHTML = `<div class="col-4">
                                     <img src="${apiUrl}${results.image.url}" alt="${results.image.alternativeText}" style="width: 300px;">
                                  </div>
                                  <div class="col-6">
                                      <h1>${results.title}</h1>
                                      <p>${results.description}</p>
                                      <p>$${results.price}</p>
                                      <div>
                                        <button type="submit" id="addToCart" data-id="${results.id}" data-title="${results.title}" data-price="${results.price}" data-image="${results.image.url}" data-altText="${results.image.alternativeText}">${buttonText}</button>
                                      </div>
                                  </div>`;
}