import { apiUrl } from "../../settings/api.js";
import { saveToken, saveUser } from "../../utils/storage.js";
import displayMessage from "../global/displayMessage.js";

export async function submitLogin(username, password) {
    const url = apiUrl + "/auth/local";
    const data = JSON.stringify({
        identifier: username,
        password: password
    });

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json"
        }
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json);

        if (json.user) {
            saveToken(json.jwt);
            saveUser(json.user);

            location.href = "/admin.html";
        }

        if (json.error) {
            displayMessage("alert-danger", "Invalid username or password", ".message");
        }

    } catch (error) {
        console.log(error)
    }
}