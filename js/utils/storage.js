export function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
};

export function getFromStorage(key) {
    const list = localStorage.getItem(key);

    if (!list) {
        return [];
    }

    return JSON.parse(list);
};

export function clearStorageItem(key) {
    localStorage.removeItem(key);
};


export function removeItemFromStorage(id) {
    const cartList = getFromStorage("cart");

    const productExists = cartList.find(product => product.id === id);

    if (productExists) {
        const newList = cartList.filter(product => product.id !== id);
        saveToStorage("cart", newList);
    }
}

/* Log in functions */

export function saveToken(token) {
    saveToStorage("token", token);
}

export function getToken() {
    return getFromStorage("token");
}

export function saveUser(user) {
    saveToStorage("user", user);
}

export function getUser() {
    const user = getFromStorage("user");

    if (user) {
        return user.username;
    }

    return null;
}