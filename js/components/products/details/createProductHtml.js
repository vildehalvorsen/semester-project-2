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

    breadcrumbContainer.innerHTML += `<p class="active">${results.title}</p>`;

    let imageUrl = `${apiUrl}${results.image.url}`;

    if (imageUrl === "http://localhost:1337undefined") {
        imageUrl = `/image/AdobeStock_308675144-[Converted].jpg`;
    }

    productContainer.innerHTML = `<div class="product__image">
                                     <img src="${imageUrl}" alt="${results.image.alternativeText}">
                                  </div>
                                  <div class="product__info">
                                      <h1>${results.title}</h1>
                                      <p>${results.description}</p>
                                      <p class="price">$${results.price}</p>
                                      <div class="products__btn">
                                        <button type="submit" id="addToCart" data-id="${results.id}" data-title="${results.title}" data-price="${results.price}" data-image="${results.image.url}" data-altText="${results.image.alternativeText}">${buttonText}</button>
                                      </div>
                                  </div>
                                  <div class="product__modal">
                                     <img src="${imageUrl}" alt="${results.image.alternativeText}">
                                  </div>`;

    const image = document.querySelector(".product__image img");
    const modal = document.querySelector(".product__modal");

    image.onclick = function() {
        modal.style.display = "block";
    }

    document.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
}