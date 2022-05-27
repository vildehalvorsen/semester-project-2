import { getUser } from "../../utils/storage.js";

export default function createMenu() {

    const { pathname } = document.location;

    const username = getUser();

    let userLink = `<a href="/logIn.html" class="${pathname === "/logIn.html" ? "active" : ""}"><i class="fa-solid fa-user"></i></a>`;

    if (username) {
        userLink = `<a href="/admin.html" class="${pathname === "/admin.html"  || pathname === "/edit.html" ? "active" : ""}"><i class="fa-solid fa-user"></i> ${username}</a>`;
    }

    const menuContainer = document.querySelector(".menu");
    menuContainer.innerHTML = `<div class="menu__logo">
                                    <a href="/">
                                        <img src="/image/logo.png" alt="logo" />
                                    </a>
                                </div>
                                
                                <div class=""menu__nav-open>
                                    <i class="fas fa-bars"></i>
                                </div>
                                
                                <nav>
                                    <div class="menu__nav--exit">
                                        <i class="fa-solid fa-xmark"></i>
                                    </div>
                                    <div class="menu__nav--links">
                                        <a href="/" class="${pathname === "/" || pathname === "/index.html" ? "active" : ""}">Home</a>
                                        <a href="/products.html" class="${pathname === "/products.html" || pathname === "/products-details.html" ? "active" : ""}">Products</a>
                                        ${userLink}
                                        <a href="/cart.html" class="${pathname === "/cart.html" ? "active" : ""}"><i class="fa-solid fa-cart-shopping"></i></a>
                                    </div>
                                </nav>`;

    const openMenu = document.querySelector(".fa-bars");
    const exitMenu = document.querySelector(".fa-xmark");
    const menu = document.querySelector("nav");

    openMenu.onclick = function() {
        menu.style.display = "block";
    }
    exitMenu.onclick = function() {
        menu.style.display = "none";
    }

}