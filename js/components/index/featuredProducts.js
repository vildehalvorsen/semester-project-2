import { apiUrl, productsUrl } from "../../settings/api.js";

export async function getFeaturedProducts() {
    const featuredContainer = document.querySelector(".featured__products");

    try {
        const response = await fetch(productsUrl);
        const results = await response.json();

        console.log(results);

        featuredContainer.innerHTML = "";

        for (let i = 0; i < results.length; i++) {
            let imageUrl = `${apiUrl}${results[i].image.url}`;

            if (imageUrl === "http://localhost:1337undefined") {
                imageUrl = `/image/AdobeStock_308675144-[Converted].jpg`;
            }

            if (results[i].featured) {
                featuredContainer.innerHTML += `<a href="/products-details.html?id=${results[i].id}" class="featured__products--item">
                                                    <div class="featured__products--img" style="background-image: url(${imageUrl})"></div>
                                                    <div class="featured__products--overlay">
                                                        <h3>${results[i].title}</h3>
                                                    </div>
                                                </a>`
            }
        }

    } catch (error) {
        console.log(error);
    }
}