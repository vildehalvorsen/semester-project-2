import { apiUrl } from "../../settings/api.js";

export function createHtmlManage(results) {
    const productsContainer = document.querySelector(".products__container--manage");
    productsContainer.innerHTML = "";

    for (let i = 0; i < results.length; i++) {
        productsContainer.innerHTML += `<div class="card" style="width: 10rem;">
                                              <img src="${apiUrl}${results[i].image.url}" class="card-img-top" alt="${results[i].image.alternativeText}">
                                              <div class="card-body">
                                                  <h5 class="card-title">${results[i].title}</h5>
                                                  <p class="card-text">${results[i].price}</p>
                                              </div>
                                              <a href="/edit.html?id=${results[i].id}" class="btn btn-primary">Edit</a>
                                          </div>`;
    }
}