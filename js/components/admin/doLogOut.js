import { clearStorageItem } from "../../utils/storage.js";

export function doLogout() {
    const confirmLogOut = confirm("Are you sure?");

    if (confirmLogOut) {
        clearStorageItem("user");
        clearStorageItem("token");

        location.href = "/logIn.html";
    }
}