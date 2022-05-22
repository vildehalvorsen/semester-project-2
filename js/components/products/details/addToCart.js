import { getFromStorage, saveToStorage } from "../../../utils/storage.js";

export function addToCart() {
    const addToCartBtn = document.querySelector("#addToCart");
    addToCartBtn.addEventListener("click", toggleCart);
}

function toggleCart() {
    const addToCartBtn = document.querySelector("#addToCart");

    const id = this.dataset.id;
    const title = this.dataset.title;
    const price = this.dataset.price;
    const image = this.dataset.image;
    const altText = this.dataset.altText;

    const currentList = getFromStorage("cart");
    const productExists = currentList.find(cart => cart.id === id);

    if (!productExists) {
        const product = { id: id, title: title, price: price, image: image, altText: altText };
        currentList.push(product);
        saveToStorage("cart", currentList);
        addToCartBtn.innerText = "Remove from cart";

    } else {
        const newList = currentList.filter(cart => cart.id !== id);
        saveToStorage("cart", newList);
        addToCartBtn.innerText = "Add to cart";
    }
}