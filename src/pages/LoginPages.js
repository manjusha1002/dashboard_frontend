import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../components/Navbar";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const API = process.env.REACT_APP_API_URL;

    const handleLogin = async () => {
        try {
            const res = await axios.post(`${API}/api/auth/login`, { email, password });
            localStorage.setItem("token", res.data.token);
            navigate("/feed");
        } catch (err) {
            alert("Login failed");
        }
    };

    return (
        <>

            <div className="container mt-5" style={{ maxWidth: "400px" }}>
                <h3 className="mb-3">Login</h3>
                <input
                    className="form-control mb-3"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    className="form-control mb-3"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button className="btn btn-primary w-100 mb-2" onClick={handleLogin}>Login</button>
                <p className="text-center">
                    New here? <Link to="/register">Register</Link>
                </p>
            </div>
        </>
    );
}

export default LoginPage;
