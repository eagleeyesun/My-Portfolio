import React from "react";
import { useState } from "react";
import { useLoaderData,Form, redirect ,useNavigate } from "react-router-dom";
import { loginUser } from "./api";


export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export async function action({request}) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    const data = await loginUser ({email,password})
    localStorage.setItem("loggedin",true)
    return redirect("/host")
}


export default function Login() {
const [status,setStatus] = useState("idle")  
const [error,setError] = useState(null) 
const message = useLoaderData()
const navigate = useNavigate()

function handleSubmit(e) {
    e.preventDefault()
    setStatus("submitting")
    setError(null)
    loginUser(loginFormData)
        .then(data => {
            navigate("/host", { replace: true })
        })
        .catch(err => setError(err))
        .finally(() => setStatus("idle"))
}






    return(
        <div className="login-container">
            
            <h1>Sign in to your account </h1>
            {message && <h2 className="red">{message}</h2>}
            <Form className="login-form" method="post">
                <input type="email"
                       name="email"
                       
                       placeholder="Email address"
                       
                />
                <input type="password"
                       name="password"
                       
                       placeholder="Password"
                       
                />
                <button
                    disabled={status === "submitting"}
                >
                    {status === "submitting"
                        ? "Logging in..."
                        : "Log in"
                    }
                </button>
            </Form>
       
        </div>
    )
    
};
