import { redirect } from "react-router-dom";

export async function requieredAuth() {
    const isLoggedIn = localStorage.getItem("loggedin")

    if (!isLoggedIn) {
        throw redirect("/login?message=You must log in first.")
    }

    
}
