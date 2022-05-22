import { getUser } from "../../utils/storage.js";

export default function createMenu() {

    const { pathname } = document.location;

    const username = getUser();

    let userLink = `<a href="/logIn.html" class="nav-link mx-4 ${pathname === "/logIn.html" ? "active" : ""}"><i class="fa-solid fa-user"></i></a>`;

    if (username) {
        userLink = `<a href="/admin.html" class="nav-link mx-4 ${pathname === "/admin.html"  || pathname === "/edit.html" ? "active" : ""}"><i class="fa-solid fa-user"></i> ${username}</a>`;
    }

    const menuContainer = document.querySelector(".menu");
    menuContainer.innerHTML = `<nav class="navbar navbar-expand-md navbar-light bg-light">
                                    <div class="container-fluid">
                                        <a class="navbar-brand" href="/">BRAND</a>
                                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                  </button>
                                        <div class="collapse navbar-collapse justify-content-md-end" id="navbarNavAltMarkup">
                                            <div class="navbar-nav">
                                                <a href="/" class="nav-link mx-4 ${pathname === "/" || pathname === "/index.html" ? "active" : ""}">Home</a>
                                                <a href="/products.html" class="nav-link mx-4 ${pathname === "/products.html" ? "active" : ""}">Products</a>
                                                ${userLink}
                                                <a href="/cart.html" class="nav-link mx-4 ${pathname === "/cart.html" ? "active" : ""}"><i class="fa-solid fa-cart-shopping"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </nav>`
}