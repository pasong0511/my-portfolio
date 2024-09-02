import React from "react";
import { Link } from "react-router-dom";

interface IHeaderProps {
    routes: any[];
}

function Header({ routes }: IHeaderProps) {
    return (
        <div id="header">
            <div className="logo">
                <Link to={`/`}>
                    <img
                        src="/theme/portfolio/img/logo.svg"
                        alt="박진희 포트폴리오"
                        title=""
                    />
                </Link>
            </div>

            <nav>
                <ul className="main_menu">
                    {routes
                        .filter((route) => route.name) // name이 있는 경우에만 메뉴에 표시
                        .map((route, index) => (
                            <li key={index}>
                                <Link to={route.path}>{route.name}</Link>
                            </li>
                        ))}
                </ul>
            </nav>
        </div>
    );
}

export default Header;
