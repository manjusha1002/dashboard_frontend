import React from "react";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
            <Link className="navbar-brand" to="/feed">NewsApp</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav me-auto">
                    {token && (
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/feed">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/profile">Profile</Link>
                            </li>
                        </>
                    )}
                </ul>
                <ul className="navbar-nav ms-auto">
                    {!token ? (
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                        </>
                    ) : (
                        <li className="nav-item">
                            <button className="btn btn-outline-light" onClick={handleLogout}>Logout</button>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
