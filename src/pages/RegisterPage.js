import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const API = process.env.REACT_APP_API_URL;

    const handleRegister = async () => {
        try {
            await axios.post(`${API}/api/auth/register`, { name, email, password });
            navigate("/");
        } catch (err) {
            alert("Registration failed");
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Register</h2>
            <div className="mb-3">
                <input className="form-control" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div className="mb-3">
                <input className="form-control" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
                <input className="form-control" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <button className="btn btn-success" onClick={handleRegister}>Register</button>
        </div>
    );
}

export default RegisterPage;