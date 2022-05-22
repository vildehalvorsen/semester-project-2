import { apiUrl } from "../../settings/api.js";

export function createHtml(results) {
    const productsContainer = document.querySelector(".products__container");
    productsContainer.innerHTML = "";


    for (let i = 0; i < results.length; i++) {
        productsContainer.innerHTML += `<a href="/products-details.html?id=${results[i].id}" class="card" style="width: 18rem;">
                                                          <img src="${apiUrl}${results[i].image.url}" class="card-img-top" alt="${results[i].image.alternativeText}">
                                                          <div class="card-body">
                                                              <h5 class="card-title">${results[i].title}</h5>
                                                              <p class="card-text">${results[i].price}</p>
                                                          </div>
                                                      </a>`;
    }
}