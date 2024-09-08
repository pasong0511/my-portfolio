import React, { useState } from "react";
import { Link } from "react-router-dom";

interface IHeaderProps {
    routes: any[];
}

function Header({ routes }: IHeaderProps) {
    const [showSubmenu, setShowSubmenu] = useState<number | null>(null);

    const handleMouseEnter = (index: number) => {
        setShowSubmenu(index);
    };

    const handleMouseLeave = () => {
        setShowSubmenu(null);
    };

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
                            <li
                                key={index}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                            >
                                {route.children ? (
                                    <>
                                        <span>{route.name}</span>
                                        {showSubmenu === index && (
                                            <ul className="submenu">
                                                {route.children.map(
                                                    (
                                                        child: any,
                                                        childIndex: number
                                                    ) => (
                                                        <li key={childIndex}>
                                                            <a
                                                                href={
                                                                    child.externalLink
                                                                }
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="submenu_link"
                                                            >
                                                                {child.name}
                                                            </a>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        )}
                                    </>
                                ) : (
                                    <Link to={route.path}>
                                        <span>{route.name}</span>
                                    </Link>
                                )}
                            </li>
                        ))}
                </ul>
            </nav>
            <div className="open_menu">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default Header;
