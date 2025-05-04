import React, { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function ProfilePage() {
    const [profile, setProfile] = useState(null);
    const API = process.env.REACT_APP_API_URL;

    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem("token");
            const res = await axios.get(`${API}/api/user/profile`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setProfile(res.data);
        };
        fetchProfile();
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Profile</h2>
            {profile && (
                <div className="card p-3">
                    <p><strong>Name:</strong> {profile.name}</p>
                    <p><strong>Email:</strong> {profile.email}</p>
                    <p><strong>Role:</strong> {profile.role}</p>
                    <p><strong>Credits:</strong> {profile.credits}</p>
                </div>
            )}
        </div>
    );
}

export default ProfilePage;