import { removeItemFromStorage } from "../../utils/storage.js";
import { createCartList } from "./createCartList.js";

export function deleteButton() {
    const deleteBtn = document.querySelectorAll(".cart__item--delete i");

    deleteBtn.forEach(btn => {
        btn.addEventListener("click", removeProduct);
    });
}

function removeProduct() {
    const id = this.dataset.id;

    const confirmDelete = confirm("Are you sure?");

    if (confirmDelete) {
        removeItemFromStorage(id);
        createCartList();
    }
};