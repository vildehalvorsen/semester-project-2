import { apiUrl } from "../../settings/api.js";

export function createHtml(results) {
    const productsContainer = document.querySelector(".products__container");
    productsContainer.innerHTML = "";


    for (let i = 0; i < results.length; i++) {
        let imageUrl = `${apiUrl}${results[i].image.url}`;

        if (imageUrl === "http://localhost:1337undefined") {
            imageUrl = `/image/AdobeStock_308675144-[Converted].jpg`;
        }

        productsContainer.innerHTML += `<a href="/products-details.html?id=${results[i].id}">
                                            <div class="products__item">
                                                <img src="${imageUrl}" alt="${results[i].image.alternativeText}">
                                                <div class="products__item--info">
                                                    <h3>${results[i].title}</h3>
                                                    <p>$ ${results[i].price}</p>
                                                </div>
                                            </div>
                                        </a>`;
    }

}