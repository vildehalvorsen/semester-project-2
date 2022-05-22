import { apiUrl, productsUrl } from "../../settings/api.js";

export async function getFeaturedProducts() {
    const featuredContainer = document.querySelector(".featured__products");

    try {
        const response = await fetch(productsUrl);
        const results = await response.json();

        console.log(results);

        featuredContainer.innerHTML = "";

        for (let i = 0; i < results.length; i++) {
            if (results[i].featured) {
                featuredContainer.innerHTML += `<div class="featured__products--item">
                                                <img src="${apiUrl}${results[i].image.url}" alt="${results[i].image.alternativeText}"/>
                                                <h3>${results[i].title}</h3>
                                              </div>`
            }
        }

    } catch (error) {
        console.log(error);
    }
}