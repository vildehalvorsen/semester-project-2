import { getFromStorage, saveToStorage } from "../../../utils/storage.js";

export function updateCartStorage(id, title, price) {
    const currentList = getFromStorage("cart");
    const newList = currentList.map(function(product) {
        if (product.id === id) {
            return {...product, title: title, price: price };
        }
        return product;
    });

    saveToStorage("cart", newList);
}

export function deleteFromCart(id) {
    const cartList = getFromStorage("cart");

    const productExists = cartList.find(product => product.id === JSON.stringify(id));

    if (productExists) {
        const newList = cartList.filter(product => product.id !== JSON.stringify(id));
        saveToStorage("cart", newList);
    }
}