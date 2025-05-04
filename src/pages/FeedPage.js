import React, { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function FeedPage() {
    const [feed, setFeed] = useState([]);
    const API = process.env.REACT_APP_API_URL;

    useEffect(() => {
        const fetchFeed = async () => {
            const token = localStorage.getItem("token");
            const res = await axios.get(`${API}/api/feed/generate`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setFeed(res.data);
        };
        fetchFeed();
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Latest News Feed</h2>
            {feed.length === 0 ? (
                <div className="text-center text-muted">No news articles available at the moment.</div>
            ) : (
                <div className="row">
                    {feed.map((post, index) => (
                        <div key={index} className="col-md-6 mb-4">
                            <div className="card h-100 shadow-sm">
                                {post.urlToImage && (
                                    <img
                                        src={post.urlToImage}
                                        className="card-img-top"
                                        alt="News"
                                        style={{ height: '200px', objectFit: 'cover' }}
                                    />
                                )}
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{post.title}</h5>
                                    <p className="card-text">{post.description || "No description available."}</p>
                                    <p className="card-text">
                                        <small className="text-muted">
                                            Source: {post.source || "Unknown"} | Published: {new Date(post.publishedAt).toLocaleString()}
                                        </small>
                                    </p>
                                    <a href={post.url} className="btn btn-primary mt-auto" target="_blank" rel="noopener noreferrer">
                                        Read Full Article
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default FeedPage;
