import { getFromStorage } from "../../utils/storage.js";
import { apiUrl } from "../../settings/api.js";
import { deleteButton } from "./deleteButton.js";


export function createCartList() {
    const products = getFromStorage("cart");
    const productsContainer = document.querySelector(".cart");

    productsContainer.innerHTML = "";

    if (products.length === 0) {
        productsContainer.innerHTML = `<p>There are currently no items in your cart...</p>
                                        <a href="/products.html" class="button">Go shopping!</a>`;
    }

    products.forEach(product => {
        let imageUrl = `${apiUrl}${product.image}`;

        if (imageUrl === "http://localhost:1337undefined") {
            imageUrl = `/image/AdobeStock_308675144-[Converted].jpg`;
        }
        productsContainer.innerHTML += `<div class="cart__item">
                                        <div class="cart__item--info">
                                            <div>
                                                <img src="${imageUrl}" alt="${product.title}">
                                            </div>
                                            <div class="cart__item--link">
                                                <h4>${product.title}</h4>
                                                <a href="/products-details.html?id=${product.id}">View product</a>
                                            </div>
                                            <div class="cart__item--price">
                                                <h4>$ ${product.price}</h4>
                                            </div>
                                            <div class="cart__item--delete">
                                                <i class="fa-solid fa-trash-can" data-id=${product.id}></i>
                                            </div>
                                        </div>
                                    </div>`;
    });

    createSummary();
    deleteButton();

};



function createSummary() {
    const summaryContainer = document.querySelector(".summary__info");
    const productsInfo = document.querySelector(".summary__info--products");
    const totalInfo = document.querySelector(".summary__info--total");

    const products = getFromStorage("cart");

    productsInfo.innerHTML = "";

    let total = 0;

    for (let i = 0; i < products.length; i++) {
        const price = JSON.parse(products[i].price);
        total += price;

        productsInfo.innerHTML += `<div class="products__info">
                                        <p>${products[i].title}</p>
                                        <p>$ ${products[i].price}</p>
                                    </div>`;

        totalInfo.innerHTML = `<p>Total: $${total}</p>`;
    }

    if (products.length === 0) {
        summaryContainer.innerHTML = `<p> -- </p>`;
    }
}