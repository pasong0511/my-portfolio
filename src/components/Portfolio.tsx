import React from "react";
import { Link } from "react-router-dom";

function Portfolio() {
    const portfolioItems = [
        { id: 1, title: "Project 1" },
        { id: 2, title: "Project 2" },
        { id: 3, title: "Project 3" },
    ];

    return (
        <div>
            <h2>Portfolio Page</h2>
            <ul>
                {portfolioItems.map((item) => (
                    <li key={item.id}>
                        <Link to={`/portfolio/${item.id}`}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Portfolio;
