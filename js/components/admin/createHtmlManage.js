import { apiUrl } from "../../settings/api.js";

export function createHtmlManage(results) {
    const productsContainer = document.querySelector(".products__container--manage");
    productsContainer.innerHTML = "";

    for (let i = 0; i < results.length; i++) {
        let imageUrl = `${apiUrl}${results[i].image.url}`;
        const imageAlt = `${results[i].image.alternativeText}`;

        if (imageUrl === "http://localhost:1337undefined") {
            imageUrl = `/image/AdobeStock_308675144-[Converted].jpg`;
        }

        productsContainer.innerHTML += `<a href="/edit.html?id=${results[i].id}" class="products__item">
                                            <img src="${imageUrl}" alt="${imageAlt}"></img>                                   
                                            <div class="products__item--info">
                                                <h3>${results[i].title}</h3>
                                                <p>$ ${results[i].price}</p>
                                             </div>
                                        </a>`;
    }
}