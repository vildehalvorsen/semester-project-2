import { getFromStorage } from "../../utils/storage.js";
import { apiUrl } from "../../settings/api.js";
import { deleteButton } from "./deleteButton.js";


export function createCartList() {
    const products = getFromStorage("cart");
    const productsContainer = document.querySelector(".cart");

    productsContainer.innerHTML = "";

    if (products.length === 0) {
        productsContainer.innerHTML = `<p>There are currently no items in your cart...</p>`;
    }

    products.forEach(product => {
        productsContainer.innerHTML += `<div class="cart__item">
                                        <div class="cart__item--info">
                                            <div>
                                                <img src="${apiUrl + product.image}" alt="${product.altText}" style="width: 200px">
                                            </div>
                                            <div>
                                                <h4>${product.title}</h4>
                                                <a href="/products-details.html?id=${product.id}">View product</a>
                                            </div>
                                            <div>
                                                <h4>$ ${product.price}</h4>
                                            </div>
                                        </div>
                                        <div class="cart__item--delete">
                                            <i class="fa-solid fa-trash-can" data-id=${product.id}></i>
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

        productsInfo.innerHTML += `<p>${products[i].title}</p>
                                   <p>${products[i].price}</p>`;

        totalInfo.innerHTML = `<p>Total: $${total}</p>`;
    }

    if (products.length === 0) {
        summaryContainer.innerHTML = `<p> -- </p>`;
    }
}