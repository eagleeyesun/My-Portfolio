import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";


export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export default function Login() {
const [formLoginData,setFormLoginData] = useState({ email: "", password: ""})



const message = useLoaderData()

function handleSubmit(e) {
    e.preventDefault()
    console.log(formLoginData)
}

function handleChange(e) {
    const {name,value}= e.target
    setFormLoginData(prev=>({
        ...prev,
        [name] : value
    }))
}

    return(
        <div className="login-container">
            
            <h1>Sign in to your account </h1>
            {message && <h2 className="red">{message}</h2>}
            <form className="login-form" onSubmit={handleSubmit}>
                <input type="email"
                       name="email"
                       onChange={handleChange}
                       placeholder="Email address"
                       value={formLoginData.email}
                />
                <input type="password"
                       name="password"
                       onChange={handleChange}
                       placeholder="Password"
                       value={formLoginData.password}
                />
                <button>Log in</button>
            </form>
       
        </div>
    )
    
};
