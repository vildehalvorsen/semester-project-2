import { apiUrl, homeUrl } from "../../settings/api.js";

export async function getHeroBanner() {
    const bannerContainer = document.querySelector(".banner");

    try {
        const response = await fetch(homeUrl);
        const results = await response.json();

        bannerContainer.innerHTML += `<img src="${apiUrl}${results.hero_banner.url}" class="img-fluid" alt="${results.hero_banner.alternativeText}">`

    } catch (error) {
        console.log(error);
    }
}